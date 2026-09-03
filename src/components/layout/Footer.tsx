'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Mail, Phone, MapPin, ShieldCheck, Send, CheckCircle2, Loader2 } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/zyntechlabs',
    hoverClass: 'hover:bg-[#0077b5] hover:text-white',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.75-.79 1.75-1.75s-.78-1.75-1.75-1.75-1.75.79-1.75 1.75.78 1.75 1.75 1.75M7.86 18.5v-8.37H5.07v8.37h2.79z"/>
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    url: 'https://twitter.com/zyntechlabs',
    hoverClass: 'hover:bg-black hover:text-white',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    url: 'https://github.com/zyntechlabs',
    hoverClass: 'hover:bg-[#333] hover:text-white',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@zyntechlabs',
    hoverClass: 'hover:bg-[#ff0000] hover:text-white',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/zyntechlabs',
    hoverClass: 'hover:bg-[#1877f2] hover:text-white',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/zyntechlabs',
    hoverClass: 'hover:bg-[#e1306c] hover:text-white',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error('Subscription failed');

      setSubscribed(true);
      setEmail('');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#050811] text-gray-400 border-t border-gray-850 pt-16 pb-12 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Bio Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-gray-800/80 items-center">
          <div className="lg:col-span-6 space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/zyntech_logo.svg"
                alt="ZynTech Labs Logo"
                width={175}
                height={30}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              We engineer scalable enterprise software, high-volume fintech engines, mobile apps, SaaS platforms, AI automation and cloud solutions for market leaders worldwide.
            </p>

            {/* Direct Contact Details */}
            <div className="space-y-2 pt-1 text-xs">
              <a href="mailto:sales@zyntechlabs.io" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                sales@zyntechlabs.io
              </a>
              <a href="tel:+17326327363" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                +1 732-632-7363
              </a>
              <a
                href="https://maps.app.goo.gl/f69fnwjQbrTDde5L7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-white transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-teal-400 flex-shrink-0 mt-0.5" />
                170 Jordan Rd, Colonia, NJ 07067, USA
              </a>
            </div>

            {/* Social Media Profiles */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className={`w-9 h-9 rounded-xl bg-gray-900 flex items-center justify-center text-gray-300 transition-all border border-gray-800 hover:scale-110 ${social.hoverClass}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-6 bg-[#0c1324] border border-gray-800 p-6 rounded-3xl">
            <h4 className="text-sm font-bold text-white mb-1">
              Subscribe to Engineering & Tech Insights
            </h4>
            <p className="text-xs text-gray-400 mb-4">
              Get monthly architectural blueprints, AI logistics case studies, and enterprise tech benchmarks.
            </p>

            {subscribed ? (
              <div className="p-3 bg-teal-950/60 border border-teal-500/40 rounded-xl text-xs text-teal-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Thank you for subscribing! You will receive our next quarterly dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  disabled={submitting}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your enterprise work email..."
                  className="w-full bg-[#070b16] border border-gray-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 text-black font-extrabold text-xs hover:from-teal-300 hover:to-cyan-400 transition-all flex items-center gap-1.5 flex-shrink-0 disabled:opacity-60"
                >
                  <span>{submitting ? 'Sending...' : 'Subscribe'}</span>
                  {submitting ? <Loader2 className="w-3 h-3 animate-spin" /> : <Send className="w-3 h-3" />}
                </button>
              </form>
            )}
            {error && <p className="text-xs text-rose-400 mt-2">{error}</p>}
          </div>
        </div>

        {/* 4-Column Working Link Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-gray-800/80 text-xs sm:text-sm">
          {/* Col 1: Services */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-teal-400 mb-4 font-mono">
              Services
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Custom Enterprise Software
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Cloud & DevOps Engineering
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Cybersecurity & Zero-Trust
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Industries */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-teal-400 mb-4 font-mono">
              Industries
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/#industries" className="hover:text-white transition-colors">
                  Fintech & Banking
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-white transition-colors">
                  Logistics & Supply Chain
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-white transition-colors">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-white transition-colors">
                  Telecom
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-white transition-colors">
                  Towing & Roadside Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Case Studies */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-teal-400 mb-4 font-mono">
              Company & Work
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/case-studies" className="hover:text-white transition-colors flex items-center gap-1">
                  Portfolio / Case Studies <ArrowUpRight className="w-3 h-3 text-teal-400" />
                </Link>
              </li>
              <li>
                <Link href="/case-study/gig-logistics" className="hover:text-white transition-colors">
                  GIG Logistics Study
                </Link>
              </li>
              <li>
                <Link href="/case-study/tarzan-transport" className="hover:text-white transition-colors">
                  Tarzan Transport Study
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Book Discovery Call
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Resources */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-teal-400 mb-4 font-mono">
              Legal & Resources
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-white transition-colors">
                  Cookie & Tracking Policy
                </Link>
              </li>
              <li>
                <Link href="/seo-docs" className="hover:text-white transition-colors flex items-center gap-1">
                  SEO Team Handbook <ArrowUpRight className="w-3 h-3 text-teal-400" />
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>© {new Date().getFullYear()} ZynTech Labs. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/sitemap.xml" className="hover:text-gray-400 transition-colors">
              XML Sitemap
            </Link>
            <Link href="/robots.txt" className="hover:text-gray-400 transition-colors">
              Robots.txt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
