import React from 'react';
import { Code2, Smartphone, Sparkles, CloudRain, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { servicesData } from '@/lib/fallbackData';
import Link from 'next/link';

const iconMap: Record<string, any> = {
  Code2,
  Smartphone,
  Sparkles,
  CloudRain,
  Layers,
  ShieldCheck,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#050811] relative border-t border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs uppercase tracking-widest text-teal-400 font-mono font-bold bg-teal-950/60 border border-teal-500/30 px-3 py-1 rounded-md mb-3">
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Full-Spectrum Enterprise Software Engineering
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            From modernizing legacy monoliths to training domain-specific AI models, we deliver reliable, high-performance tech infrastructure.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <div
                key={index}
                className="bg-[#0b101f] border border-gray-800/90 hover:border-cyan-500/40 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-300 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-850">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-400 hover:text-white transition-colors group-hover:translate-x-1"
                  >
                    Consult With Specialists <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
