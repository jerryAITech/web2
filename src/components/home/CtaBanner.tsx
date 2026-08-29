import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, PhoneCall } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function CtaBanner() {
  return (
    <section className="py-20 bg-[#070b16] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="relative rounded-3xl bg-gradient-to-r from-[#0c1830] via-[#0f2142] to-[#0c1830] border border-cyan-500/30 p-10 md:p-16 overflow-hidden shadow-2xl">
            {/* Ambient Glows */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-500/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Let&apos;s Build Something Extraordinary</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Ready to Accelerate Your Enterprise Software Roadmap?
              </h2>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Book a 30-minute discovery call with our senior solutions architect to discuss requirements, architecture blueprints, and delivery timelines.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-black font-extrabold text-base hover:from-teal-300 hover:to-cyan-400 transition-all shadow-xl shadow-teal-500/25 group"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Book A Discovery Call</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
