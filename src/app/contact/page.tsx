import React from 'react';
import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2, ShieldAlert } from 'lucide-react';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Contact Us & Book A Discovery Call',
  description:
    'Get in touch with ZynTech Labs enterprise software engineering team to discuss your digital transformation, SaaS platform, or mobile app architecture.',
  slug: 'contact',
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#070b16] text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={[{ name: 'Contact Us', url: '/contact' }]} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6">
          {/* Left Column: Contact Info & Value props */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-teal-400 font-mono font-bold bg-teal-950/60 border border-teal-500/30 px-3 py-1 rounded-md">
                Get In Touch
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-4 mb-4">
                Let&apos;s Build Your Next-Gen Solution
              </h1>
              <p className="text-gray-300 text-base leading-relaxed">
                Whether you need a full-scale enterprise software platform, an AI automation pipeline, or an emergency architecture audit, our engineering leads are here to help.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0c1324] border border-gray-800">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xs font-mono text-gray-400 uppercase font-semibold">Email Us Directly</h2>
                  <a
                    href="mailto:contact@zyntechlabs.io"
                    className="text-base font-bold text-white hover:text-teal-400 transition-colors"
                  >
                    contact@zyntechlabs.io
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0c1324] border border-gray-800">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xs font-mono text-gray-400 uppercase font-semibold">Discovery Response Time</h2>
                  <p className="text-sm font-bold text-teal-300">Within 24 business hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0c1324] border border-gray-800">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xs font-mono text-gray-400 uppercase font-semibold">Global Presence</h2>
                  <p className="text-sm text-gray-300">United States • United Kingdom • India</p>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="p-6 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 space-y-3 text-xs text-cyan-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Strict Non-Disclosure Agreement (NDA) signed before project kick-off.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Full intellectual property & source code ownership transferred to client.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0b1120] border border-gray-800/90 rounded-3xl p-8 sm:p-10 shadow-2xl relative">
              <h2 className="text-2xl font-bold text-white mb-2">Book A Discovery Call</h2>
              <p className="text-gray-400 text-sm mb-8">
                Fill in the details below and our solution architects will prepare custom project estimates.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-gray-300 uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full bg-[#070b16] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 uppercase mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="w-full bg-[#070b16] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-gray-300 uppercase mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Corp"
                      className="w-full bg-[#070b16] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 uppercase mb-2">
                      Project Industry
                    </label>
                    <select className="w-full bg-[#070b16] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors">
                      <option value="fintech">Fintech & Banking</option>
                      <option value="logistics">Logistics & Supply Chain</option>
                      <option value="healthcare">Healthcare & MedTech</option>
                      <option value="retail">Retail & E-Commerce</option>
                      <option value="saas">Enterprise SaaS</option>
                      <option value="other">Other Domain</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase mb-2">
                    Estimated Budget (USD)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    {['$10k - $25k', '$25k - $50k', '$50k - $100k', '$100k+'].map((tier, idx) => (
                      <label
                        key={idx}
                        className="flex items-center justify-center p-3 rounded-xl bg-[#070b16] border border-gray-800 hover:border-teal-500/50 cursor-pointer text-gray-300 font-mono transition-colors has-[:checked]:border-teal-400 has-[:checked]:bg-teal-950/30 has-[:checked]:text-teal-300"
                      >
                        <input type="radio" name="budget" value={tier} className="sr-only" defaultChecked={idx === 1} />
                        <span>{tier}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase mb-2">
                    Project Requirements & Scope *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about the project goals, current challenges, and required technologies..."
                    className="w-full bg-[#070b16] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 text-black font-extrabold text-base hover:from-teal-300 hover:to-cyan-400 transition-all shadow-xl shadow-teal-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Discovery Request</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
