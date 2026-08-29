'use client';

import React from 'react';
import { Award, Users, Rocket, CheckSquare } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

const stats = [
  {
    icon: Award,
    value: '8+',
    label: 'Years of Experience',
    desc: 'Delivering robust enterprise solutions',
  },
  {
    icon: Users,
    value: '100+',
    label: 'Tech Enthusiasts',
    desc: 'Specialized engineers & architects',
  },
  {
    icon: Rocket,
    value: '350+',
    label: 'Products Delivered',
    desc: 'Across global Fortune 500 & scale-ups',
  },
  {
    icon: CheckSquare,
    value: '99.9%',
    label: 'Client Satisfaction',
    desc: 'Long-term partnership retention',
  },
];

export function CounterSection() {
  return (
    <section className="py-16 bg-[#090e1c] border-y border-gray-800/80 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-cyan-500/5 to-blue-500/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div className="flex flex-col items-center text-center p-6 md:p-8 rounded-3xl bg-[#0e1628]/80 border border-gray-800/70 hover:border-cyan-500/50 hover:bg-[#121c33] transition-all duration-300 group shadow-xl hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-4 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all shadow-lg shadow-teal-500/10">
                    <Icon className="w-7 h-7" />
                  </div>

                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-teal-100 to-cyan-300 font-mono tracking-tight mb-2">
                    <AnimatedCounter value={stat.value} duration={2.2} />
                  </div>

                  <div className="text-sm md:text-base font-bold text-gray-200 mb-1">
                    {stat.label}
                  </div>

                  <div className="text-xs text-gray-400 hidden sm:block leading-relaxed">
                    {stat.desc}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
