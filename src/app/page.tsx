import React from 'react';
import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { CounterSection } from '@/components/home/CounterSection';
import { IndustriesSection } from '@/components/home/IndustriesSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { EnterpriseSection } from '@/components/home/EnterpriseSection';
import { FeaturedCaseStudies } from '@/components/home/FeaturedCaseStudies';
import { CtaBanner } from '@/components/home/CtaBanner';
import { OrganizationSchema, WebSiteSchema } from '@/components/seo/SchemaMarkup';
import { getAllCaseStudies, getSiteSettings } from '@/sanity/client';
import { constructMetadata } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return constructMetadata({
    title: settings.defaultTitle,
    description: settings.defaultDescription,
    settings,
  });
}

export default async function HomePage() {
  const caseStudies = await getAllCaseStudies();

  return (
    <>
      {/* Structured Data JSON-LD for Google Search */}
      <OrganizationSchema />
      <WebSiteSchema />

      <main className="min-h-screen bg-[#070b16] text-white">
        <HeroSection />
        <CounterSection />
        <IndustriesSection />
        <ServicesSection />
        <EnterpriseSection />
        <FeaturedCaseStudies studies={caseStudies} />
        <CtaBanner />
      </main>
    </>
  );
}
