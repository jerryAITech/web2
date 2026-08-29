import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#070b16]">
      {/* Background glowing gradients & tech grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Top Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/20 to-teal-500/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Top Tagline Badge */}
        <ScrollReveal direction="down" delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs md:text-sm font-medium mb-8 backdrop-blur-md shadow-lg shadow-cyan-500/10">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span>Next-Gen Enterprise Engineering & AI Platforms</span>
          </div>
        </ScrollReveal>

        {/* Main H1 Headline */}
        <ScrollReveal direction="up" delay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6">
            Driving Enterprise Growth with Innovative{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-400">
              Software Solutions
            </span>
          </h1>
        </ScrollReveal>

        {/* Sub-headline Paragraph */}
        <ScrollReveal direction="up" delay={0.3}>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            As a premier tech partner for modern enterprises, we architect custom software solutions — from high-volume fintech engines to automated logistics telematics. Built for resilience, performance, and long-term scalability.
          </p>
        </ScrollReveal>

        {/* Feature Badges */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-10 text-xs sm:text-sm text-gray-200">
            <div className="flex items-center gap-2 bg-gray-900/60 border border-gray-800 px-4 py-2 rounded-full">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span>Full-Cycle Development</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-900/60 border border-gray-800 px-4 py-2 rounded-full">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span>Enterprise-Grade Security</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-900/60 border border-gray-800 px-4 py-2 rounded-full">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span>Global 24/7 Delivery & Support</span>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-black font-extrabold text-base hover:from-teal-300 hover:to-cyan-400 transition-all shadow-xl shadow-teal-500/20 hover:shadow-teal-500/35 group"
            >
              <span>Book A Discovery Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/case-studies"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gray-900/80 hover:bg-gray-850 text-white font-semibold text-base border border-gray-700 hover:border-gray-600 transition-all"
            >
              Explore Client Work
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
