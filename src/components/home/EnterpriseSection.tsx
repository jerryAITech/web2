import React from 'react';
import { Cpu, Server, Lock, Zap, Gauge, GitMerge } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import Link from 'next/link';

const enterprisePillars = [
  {
    icon: Server,
    title: 'High-Concurrency Distributed Systems',
    desc: 'Event-driven streaming pipelines with Apache Kafka, RabbitMQ, and microservices engineered for millions of real-time requests.',
  },
  {
    icon: Lock,
    title: 'Bank-Grade Security & Zero-Trust',
    desc: 'End-to-end payload encryption, automated vulnerability scans, granular IAM controls, and SOC2 / HIPAA / ISO readiness.',
  },
  {
    icon: Zap,
    title: 'Predictive AI & Real-Time Telemetry',
    desc: 'Integration of real-time IoT sensors, CAN-bus telemetry, and custom AI neural networks for automation and predictive dispatch.',
  },
  {
    icon: Gauge,
    title: 'Ultra-Low Latency & High Availability',
    desc: 'Multi-region cloud clusters with automatic failover, Redis distributed caching, and 99.999% SLA architecture guarantees.',
  },
];

export function EnterpriseSection() {
  return (
    <section id="enterprise" className="py-24 bg-[#080d1a] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Copy */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="left">
              <div className="inline-block text-xs uppercase tracking-widest text-teal-400 font-mono font-bold bg-teal-950/60 border border-teal-500/30 px-3 py-1 rounded-md">
                Enterprise Grade
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] mt-3 mb-4">
                Built for Scale, Resilience & Mission-Critical Operations
              </h2>

              <p className="text-gray-300 text-base leading-relaxed mb-6">
                We eliminate technical debt by establishing solid software engineering foundations. Our architectural playbooks protect your systems against downtime, scale effortlessly, and integrate into existing legacy stacks.
              </p>

              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-black font-bold text-sm transition-colors shadow-lg shadow-teal-500/20"
                >
                  Schedule Architecture Review
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 4 Pillar Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {enterprisePillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                  <div className="bg-[#0e1628]/90 border border-gray-800 hover:border-cyan-500/50 p-6 rounded-2xl transition-all duration-300 hover:bg-[#131d33] h-full">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
