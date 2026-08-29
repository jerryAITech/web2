import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#050811] text-gray-400 border-t border-gray-850 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800/80">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/zyntech_logo.svg"
                alt="ZynTech Labs Logo"
                width={175}
                height={30}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              We build scalable enterprise software, mobile apps, SaaS platforms, AI automation and cloud solutions for fintech, logistics and fast-growing businesses worldwide.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/zyntechlabs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-gray-900 hover:bg-teal-500 hover:text-black flex items-center justify-center text-gray-300 transition-colors border border-gray-800"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.75-.79 1.75-1.75s-.78-1.75-1.75-1.75-1.75.79-1.75 1.75.78 1.75 1.75 1.75M7.86 18.5v-8.37H5.07v8.37h2.79z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/zyntechlabs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg bg-gray-900 hover:bg-teal-500 hover:text-black flex items-center justify-center text-gray-300 transition-colors border border-gray-800"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://github.com/zyntechlabs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-gray-900 hover:bg-teal-500 hover:text-black flex items-center justify-center text-gray-300 transition-colors border border-gray-800"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-4 font-mono">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
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
                  Cloud & DevOps Solutions
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Cybersecurity & Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-4 font-mono">
              Industries
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#industries" className="hover:text-white transition-colors">
                  Fintech & Banking
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-white transition-colors">
                  Logistics & Freight
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-white transition-colors">
                  Healthcare & MedTech
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-white transition-colors">
                  Retail & E-Commerce
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-white transition-colors">
                  Enterprise SaaS
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links & Case Studies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-4 font-mono">
              Company & Work
            </h4>
            <ul className="space-y-2.5 text-sm">
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
                  Book A Discovery Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
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
            <Link href="/studio" className="text-teal-400 hover:underline">
              CMS Admin Studio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
