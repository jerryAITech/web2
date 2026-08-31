import { createClient, type QueryParams } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn, isSanityProjectConfigured } from './env';
import { blogPostsData, caseStudiesData, siteSettings as defaultSiteSettings } from '@/lib/fallbackData';
import { BlogPost, CaseStudy, Page, SiteSettings } from '@/types';

export const isSanityConfigured = isSanityProjectConfigured;

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      perspective: 'published',
    })
  : null;

// Safe fetch function that falls back to replica data
export async function sanityFetch<T>({
  query,
  params = {},
  fallback,
  tags = [],
}: {
  query: string;
  params?: QueryParams;
  fallback?: T;
  tags?: string[];
}): Promise<T> {
  if (client) {
    try {
      const data = await client.fetch<T>(query, params, {
        next: { revalidate: 60, tags },
      });
      if (data !== null && data !== undefined) {
        return data;
      }
    } catch (err) {
      console.warn('Sanity fetch failed or not configured, using fallback data:', err);
    }
  }
  return fallback as T;
}

// High-level content getters with guaranteed non-null fallbacks
export async function getSiteSettings(): Promise<SiteSettings> {
  const result = await sanityFetch<SiteSettings | null>({
    query: `*[_type == "siteSettings"][0]{
      siteName,
      siteUrl,
      "defaultTitle": coalesce(defaultSeoTitle, defaultTitle),
      "defaultDescription": coalesce(defaultSeoDescription, defaultDescription),
      "defaultOgImage": defaultOgImage.asset->url,
      ga4Id,
      gtmId,
      googleVerification,
      redirects
    }`,
    fallback: defaultSiteSettings,
    tags: ['siteSettings'],
  });

  return {
    siteName: result?.siteName || defaultSiteSettings.siteName,
    siteUrl: result?.siteUrl || defaultSiteSettings.siteUrl,
    defaultTitle: result?.defaultTitle || defaultSiteSettings.defaultTitle,
    defaultDescription: result?.defaultDescription || defaultSiteSettings.defaultDescription,
    defaultOgImage: result?.defaultOgImage || defaultSiteSettings.defaultOgImage,
    ga4Id: result?.ga4Id || defaultSiteSettings.ga4Id,
    gtmId: result?.gtmId || defaultSiteSettings.gtmId,
    googleVerification: result?.googleVerification || defaultSiteSettings.googleVerification,
    socials: result?.socials || defaultSiteSettings.socials,
  };
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const result = await sanityFetch<BlogPost[]>({
    query: `*[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      excerpt,
      "coverImage": mainImage.asset->url,
      publishedAt,
      readTime,
      author->{ name, "slug": slug.current, role, "avatar": avatar.asset->url, bio },
      category->{ title, "slug": slug.current },
      seo
    }`,
    fallback: blogPostsData,
    tags: ['post'],
  });

  if (result && Array.isArray(result) && result.length > 0) {
    return result;
  }
  return blogPostsData;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const post = await sanityFetch<BlogPost | null>({
    query: `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      excerpt,
      "coverImage": mainImage.asset->url,
      publishedAt,
      readTime,
      author->{ name, "slug": slug.current, role, "avatar": avatar.asset->url, bio },
      category->{ title, "slug": slug.current },
      body,
      seo
    }`,
    params: { slug },
    fallback: blogPostsData.find((p) => p.slug === slug) || null,
    tags: [`post:${slug}`],
  });

  return post || blogPostsData.find((p) => p.slug === slug) || null;
}

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  const result = await sanityFetch<CaseStudy[]>({
    query: `*[_type == "caseStudy"]{
      _id,
      title,
      client,
      "slug": slug.current,
      tagline,
      "heroImage": heroImage.asset->url,
      category,
      industry,
      overview,
      challenge,
      solution,
      results,
      metrics,
      techStack,
      testimonial,
      seo
    }`,
    fallback: caseStudiesData,
    tags: ['caseStudy'],
  });

  if (result && Array.isArray(result) && result.length > 0) {
    return result;
  }
  return caseStudiesData;
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const study = await sanityFetch<CaseStudy | null>({
    query: `*[_type == "caseStudy" && slug.current == $slug][0]{
      _id,
      title,
      client,
      "slug": slug.current,
      tagline,
      "heroImage": heroImage.asset->url,
      category,
      industry,
      overview,
      challenge,
      solution,
      results,
      metrics,
      techStack,
      testimonial,
      seo
    }`,
    params: { slug },
    fallback: caseStudiesData.find((c) => c.slug === slug) || null,
    tags: [`caseStudy:${slug}`],
  });

  return study || caseStudiesData.find((c) => c.slug === slug) || null;
}

export async function getAllPages(): Promise<Page[]> {
  const result = await sanityFetch<Page[]>({
    query: `*[_type == "page"]{
      _id,
      title,
      "slug": slug.current,
      tagline,
      "heroImage": heroImage.asset->url,
      seo
    }`,
    fallback: [],
    tags: ['page'],
  });

  return Array.isArray(result) ? result : [];
}

export async function getPageBySlug(slug: string): Promise<Page | null> {
  const page = await sanityFetch<Page | null>({
    query: `*[_type == "page" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      tagline,
      "heroImage": heroImage.asset->url,
      body,
      seo
    }`,
    params: { slug },
    fallback: null,
    tags: [`page:${slug}`],
  });

  return page || null;
}
