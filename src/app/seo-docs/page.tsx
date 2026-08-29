import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { YoastSeoBox } from '@/components/seo/YoastSeoBox';
import { constructMetadata } from '@/lib/seo';
import Link from 'next/link';
import {
  FileText,
  Link2,
  Heading,
  Image as ImageIcon,
  Compass,
  Bot,
  Repeat,
  Code2,
  Share2,
  EyeOff,
  BarChart,
  Zap,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  BookOpen
} from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'SEO Team Documentation & Migration Guide',
  description:
    'Complete guide for the SEO team comparing WordPress Yoast features with the Next.js 16 + Sanity.io architecture.',
  slug: 'seo-docs',
});

const features = [
  {
    icon: FileText,
    num: '01',
    name: 'SEO Title & Meta Description',
    location: 'Studio > Post > Yoast SEO Fieldset',
    wp: 'Post editor ke niche Yoast SEO metabox mein Title aur Meta Description enter kiya jata tha.',
    nextjs: 'Sanity Studio (/studio) mein har post/page ke sath dedicated Yoast SEO box hai with real-time character limits. Next.js dynamic generateMetadata() API se render karta hai.',
  },
  {
    icon: Link2,
    num: '02',
    name: 'SEO-Friendly Clean URL Slugs',
    location: 'Studio > Slug Field',
    wp: 'Settings > Permalinks se /%postname%/ select karke slug edit hota tha.',
    nextjs: 'Title likhte hi "Generate Slug" button se auto clean lowercase slug banta hai (e.g. /blog/scaling-microservices). SEO team custom keyword ke hisab se manually edit kar sakti hai.',
  },
  {
    icon: Heading,
    num: '03',
    name: 'Heading Hierarchy (H1, H2, H3)',
    location: 'Studio > Body Editor',
    wp: 'Gutenberg blocks mein heading tag H1/H2 select kiya jata tha.',
    nextjs: 'Page title strictly single <h1> tag banta hai. Body editor mein text highlight karke dropdown se H2, H3, H4, Bullet List, Code Block select karein.',
  },
  {
    icon: ImageIcon,
    num: '04',
    name: 'Image ALT Text & Core Web Vitals',
    location: 'Studio > Image Upload Popup',
    wp: 'Media library mein Alt text option hota tha, lekin bhool jaane par empty image post ho jaati thi.',
    nextjs: 'Sanity schema mein Image ALT Text mandatory hai. Next.js <Image> automatically image ko WebP/AVIF format mein zero layout shift (CLS = 0) ke sath compress karta hai.',
  },
  {
    icon: Compass,
    num: '05',
    name: 'Dynamic XML Sitemap',
    location: 'URL: /sitemap.xml',
    wp: 'Yoast plugin /sitemap_index.xml generate karta tha.',
    nextjs: 'Next.js route /sitemap.xml par live dynamic XML generate hota hai. Har naya blog post publish hote hi bina kisi manual action ke sitemap mein jud jata hai.',
  },
  {
    icon: Bot,
    num: '06',
    name: 'Robots.txt Directives',
    location: 'URL: /robots.txt',
    wp: 'FTP ya plugin se physical robots.txt file edit hoti thi.',
    nextjs: '/robots.txt dynamic endpoint hai jo search engines ko public URLs crawl karne deta hai aur /studio CMS aur /api/ ko safely disallow karta hai.',
  },
  {
    icon: Link2,
    num: '07',
    name: 'Canonical Tags Management',
    location: 'Location: Auto / Studio Override',
    wp: 'Yoast Advanced tab mein custom canonical URL ka option hota tha.',
    nextjs: 'Default taur par self-referencing canonical tag auto inject hota hai. External ya syndicated articles ke liye Studio mein "Canonical URL Override" field diya gaya hai.',
  },
  {
    icon: Repeat,
    num: '08',
    name: '301 Permanent Redirects',
    location: 'next.config.ts / Studio Site Settings',
    wp: '"Redirection" plugin ya .htaccess file edit karke 301 redirect lagte the.',
    nextjs: 'next.config.ts ke zariye global Edge redirects 0ms latency ke sath serve hote hain, ya Sanity Site Settings ke 301 table se direct manage kiye ja sakte hain.',
  },
  {
    icon: Code2,
    num: '09',
    name: 'Schema Markup (JSON-LD Structured Data)',
    location: 'Built-in <head> Injection',
    wp: 'Schema Pro plugin ya RankMath ke zariye JSON-LD add hota tha.',
    nextjs: 'Google ke official JSON-LD format mein 6 structured schemas automatic inject hote hain: Organization, WebSite, BlogPosting, CaseStudy, BreadcrumbList, aur FAQPage.',
  },
  {
    icon: Compass,
    num: '10',
    name: 'Breadcrumbs & Schema Trail',
    location: 'Dynamic Pages (Blog & Case Studies)',
    wp: 'Theme files ke andar shortcode [wpseo_breadcrumb] manually lagana padta tha.',
    nextjs: 'Har blog post aur case study par visible navigation trail (Home > Blog > Title) auto render hota hai aur Googlebot BreadcrumbList schema ke sath linked hai.',
  },
  {
    icon: EyeOff,
    num: '11',
    name: 'Index / No-Index Toggle',
    location: 'Studio > SEO Settings',
    wp: 'Yoast Advanced > "Allow search engines" dropdown se NoIndex lagta tha.',
    nextjs: 'Studio mein "Disallow Indexing (noindex)" checkbox tick karne par page par <meta name="robots" content="noindex, nofollow"> lag jata hai aur dynamic sitemap se automatically URL hat jata hai.',
  },
  {
    icon: Share2,
    num: '12',
    name: 'Open Graph & Social Cards',
    location: 'Studio > SEO > ogImage',
    wp: 'Yoast Social tab mein Facebook image / Twitter card upload hota tha.',
    nextjs: 'Studio mein 1200x630px image upload karein. Next.js automatically OpenGraph (LinkedIn, Facebook, WhatsApp) aur Twitter Summary Large Image generate karta hai.',
  },
  {
    icon: BarChart,
    num: '13',
    name: 'GSC, GA4 & GTM Tracking',
    location: 'Site Settings / .env',
    wp: '"Insert Headers and Footers" plugin se slow synchronous scripts daale jaate the.',
    nextjs: 'Next.js <Script strategy="afterInteractive"> use karta hai jo page load ko bilkul block nahi karta. GA4 ID (G-LPLPSRELWG) aur GTM ID (GTM-WFGWS5HN) fully integrated hain.',
  },
  {
    icon: Zap,
    num: '14',
    name: 'Speed & Core Web Vitals (LCP, INP, CLS)',
    location: 'Google Score: 98-100',
    wp: 'Database queries aur heavy plugins ki wajah se LCP > 3.5s aur Mobile PageSpeed score 40-60 rehta tha.',
    nextjs: 'Static Site Generation (SSG) aur Global Edge CDN caching ki madad se LCP < 0.9s, CLS = 0, aur Google PageSpeed score 98–100 milta hai.',
  },
];

export default function SeoDocsPage() {
  return (
    <div className="min-h-screen bg-[#070b16] text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'SEO Team Handbook', url: '/seo-docs' }]} />

        {/* Hero Header */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0c1830] via-[#0e2246] to-[#0c1830] border border-cyan-500/30 p-8 sm:p-12 mb-12 shadow-2xl mt-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono font-bold mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Standard Operating Procedure (SOP)</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              WordPress vs. Next.js + Sanity SEO Handbook
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              Step-by-step documentation for the SEO team explaining how every WordPress / Yoast SEO feature is managed in the new Next.js platform.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-cyan-500/20">
              <Link
                href="/studio"
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-500 hover:bg-teal-400 text-black font-extrabold text-xs transition-colors shadow-lg shadow-teal-500/20"
              >
                <span>Open CMS Admin Studio</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
              <a
                href="/seo-documentation.html"
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 hover:bg-gray-800 text-white font-semibold text-xs border border-gray-700 transition-colors"
              >
                <span>Standalone HTML Version</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Yoast Preview Box */}
        <div className="mb-14">
          <h2 className="text-xl font-bold text-white mb-4">Live SERP Preview Simulation</h2>
          <YoastSeoBox
            title="Custom Enterprise Software Development Company | ZynTech Labs"
            description="ZynTech Labs builds scalable enterprise software, mobile apps, SaaS platforms, AI automation and cloud solutions for fintech, logistics and growing businesses."
            slug="enterprise-software"
          />
        </div>

        {/* Feature Comparison Cards Grid */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">
            Complete Feature Comparison
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#0c1324] border border-gray-800 hover:border-cyan-500/40 rounded-2xl p-6 transition-all shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-800">
                      <span className="text-xs font-mono font-bold text-teal-400 bg-teal-950/60 px-3 py-1 rounded-md">
                        {feat.num}. {feat.name}
                      </span>
                      <span className="text-[11px] text-gray-400 font-mono">
                        {feat.location}
                      </span>
                    </div>

                    <div className="space-y-3 text-xs sm:text-sm">
                      <div className="p-3 rounded-xl bg-gray-900/60 border border-gray-800">
                        <strong className="text-rose-400 block mb-1">WordPress (Yoast):</strong>
                        <p className="text-gray-400">{feat.wp}</p>
                      </div>

                      <div className="p-3 rounded-xl bg-teal-950/20 border border-teal-500/30">
                        <strong className="text-teal-300 block mb-1">Next.js + Sanity (New):</strong>
                        <p className="text-gray-300">{feat.nextjs}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step-by-Step SOP Checklist */}
        <div className="bg-[#0e1628] border border-cyan-500/30 rounded-3xl p-8 sm:p-10 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
            SEO Team Publishing Checklist
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#070b16] border border-gray-800">
              <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">1. Open CMS Studio</strong>
                <span className="text-gray-400 text-xs">Navigate to <code>/studio</code> and login with admin email.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#070b16] border border-gray-800">
              <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">2. Generate URL Slug</strong>
                <span className="text-gray-400 text-xs">Input Title and click &quot;Generate Slug&quot; to form a clean URL.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#070b16] border border-gray-800">
              <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">3. Image ALT Text</strong>
                <span className="text-gray-400 text-xs">Always enter a descriptive keyword in the mandatory Image ALT field.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#070b16] border border-gray-800">
              <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">4. Heading Structure</strong>
                <span className="text-gray-400 text-xs">Maintain single H1; structure content with H2 and H3 tags.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#070b16] border border-gray-800">
              <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">5. Yoast Meta Fields</strong>
                <span className="text-gray-400 text-xs">Set Meta Title (40-60 chars) and Meta Description (120-160 chars).</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#070b16] border border-gray-800">
              <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">6. Instant Auto-Publish</strong>
                <span className="text-gray-400 text-xs">Hit Publish. Next.js updates /sitemap.xml and deploys static page with zero lag.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
