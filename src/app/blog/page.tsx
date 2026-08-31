import React from 'react';
import type { Metadata } from 'next';
import { getAllBlogPosts } from '@/sanity/client';
import { BlogCard } from '@/components/blog/BlogCard';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { constructMetadata } from '@/lib/seo';
import { Sparkles, Newspaper } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Engineering & Technology Insights Blog',
  description:
    'Deep dives into enterprise microservices, AI automation in supply chain, fintech compliance, and scalable cloud engineering from ZynTech Labs.',
  slug: 'blog',
});

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  // Extract unique categories
  const categories = Array.from(
    new Set(posts.map((p) => p.category?.title).filter(Boolean))
  );

  return (
    <div className="min-h-screen bg-[#070b16] text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Blog & Insights', url: '/blog' }]} />

        {/* Page Header */}
        <div className="max-w-3xl pt-6 mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-teal-400 font-mono font-bold bg-teal-950/60 border border-teal-500/30 px-3 py-1 rounded-md mb-3">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Engineering & Architecture Insights</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-2 mb-4">
            Insights on Enterprise Software & AI
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Practical engineering insights, architectural patterns, and strategic guides written by experienced practitioners.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 pb-10 border-b border-gray-800/80 mb-12">
          <button
            type="button"
            className="px-4 py-2 rounded-xl bg-teal-500 text-black text-xs font-extrabold shadow-md shadow-teal-500/20"
          >
            All Articles ({posts.length})
          </button>
          {categories.map((cat, i) => (
            <button
              key={i}
              type="button"
              className="px-4 py-2 rounded-xl bg-gray-900/80 hover:bg-gray-800 text-gray-300 hover:text-white text-xs font-semibold border border-gray-800 transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post._id || post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
