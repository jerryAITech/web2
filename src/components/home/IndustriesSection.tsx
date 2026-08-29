'use client';

import React, { useState } from 'react';
import { Landmark, Truck, HeartPulse, ShoppingBag, Cloud, Building2, Check, ArrowRight, RotateCw } from 'lucide-react';
import { industriesData } from '@/lib/fallbackData';
import Link from 'next/link';

const iconMap: Record<string, any> = {
  Landmark,
  Truck,
  HeartPulse,
  ShoppingBag,
  Cloud,
  Building2,
};

export function IndustriesSection() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="industries" className="py-24 bg-[#070b16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block text-xs uppercase tracking-widest text-teal-400 font-mono font-bold bg-teal-950/60 border border-teal-500/30 px-3 py-1 rounded-md mb-3">
            Industries We Serve
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Industries Our Custom Enterprise Software Development Company Serves
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            We provide custom enterprise technology solutions designed to meet the operational, regulatory, and scalability needs of modern industries.
          </p>
        </div>

        {/* 3D Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((item) => {
            const Icon = iconMap[item.icon] || Cloud;
            const isFlipped = flippedCards[item.id];

            return (
              <div
                key={item.id}
                className="h-[360px] [perspective:1000px] cursor-pointer group"
                onClick={() => toggleFlip(item.id)}
              >
                <div
                  className={`relative w-full h-full duration-700 [transform-style:preserve-3d] transition-transform rounded-3xl ${
                    isFlipped ? '[transform:rotateY(180deg)]' : ''
                  }`}
                >
                  {/* FRONT CARD */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-[#0c1324] border border-gray-800 group-hover:border-cyan-500/40 rounded-3xl p-8 flex flex-col justify-between shadow-xl transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="text-xs font-mono font-bold text-gray-400 uppercase bg-gray-900 px-3 py-1 rounded-full border border-gray-800">
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                        {item.shortDesc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-800/80 text-xs text-teal-400 font-semibold">
                      <span className="flex items-center gap-1.5">
                        <RotateCw className="w-3.5 h-3.5" /> Click to view details
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* BACK CARD */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#0c1324] to-[#121e38] border border-teal-500/50 rounded-3xl p-7 flex flex-col justify-between shadow-2xl">
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-gray-800 mb-3">
                        <h4 className="text-base font-bold text-teal-300">{item.title}</h4>
                        <span className="text-[11px] text-gray-400 flex items-center gap-1">
                          <RotateCw className="w-3 h-3" /> Flip back
                        </span>
                      </div>

                      <p className="text-gray-300 text-xs leading-relaxed mb-4">
                        {item.fullDesc}
                      </p>

                      <div className="space-y-2">
                        {item.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-gray-200">
                            <Check className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-gray-800">
                      <Link
                        href="/contact"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full block text-center bg-teal-500 hover:bg-teal-400 text-black text-xs font-bold py-2 rounded-xl transition-colors"
                      >
                        Build for {item.tag} →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
