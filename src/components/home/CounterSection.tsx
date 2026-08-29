import React from 'react';
import { Award, Users, Rocket, CheckSquare } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

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
    <section className="py-12 bg-[#090e1c] border-y border-gray-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#0e1628]/60 border border-gray-800/60 hover:border-cyan-500/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-teal-200 font-mono tracking-tight mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base font-bold text-gray-200 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-400 hidden sm:block">
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
