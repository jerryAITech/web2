import type { Metadata } from 'next';
import { SeoMetadata, SiteSettings } from '@/types';
import { siteSettings as defaultSettings } from './fallbackData';

interface GenerateMetaProps {
  title?: string;
  description?: string;
  slug?: string;
  image?: string;
  seo?: SeoMetadata;
  type?: 'website' | 'article';
  publishedTime?: string;
  authors?: string[];
  settings?: SiteSettings;
}

export function constructMetadata({
  title,
  description,
  slug = '',
  image,
  seo,
  type = 'website',
  publishedTime,
  authors,
  settings = defaultSettings,
}: GenerateMetaProps = {}): Metadata {
  const metaTitle =
    seo?.metaTitle ||
    (title
      ? `${title} | ${settings.siteName}`
      : settings.defaultTitle);

  const metaDescription =
    seo?.metaDescription ||
    description ||
    settings.defaultDescription;

  const canonical =
    seo?.canonicalUrl ||
    (slug
      ? `${settings.siteUrl}/${slug.replace(/^\/+/, '')}`
      : settings.siteUrl);

  const ogImageUrl =
    seo?.ogImage ||
    image ||
    settings.defaultOgImage;

  const noIndex = seo?.noIndex || false;
  const noFollow = seo?.noFollow || false;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical,
    },
    robots: {
      index: !noIndex,
      follow: !noFollow,
      googleBot: {
        index: !noIndex,
        follow: !noFollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonical,
      siteName: settings.siteName,
      type: type === 'article' ? 'article' : 'website',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(authors && { authors }),
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [ogImageUrl],
      creator: '@zyntechlabs',
    },
    keywords: seo?.focusKeywords,
  };
}
