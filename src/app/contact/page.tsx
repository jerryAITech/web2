import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { trustedByLogos } from '@/lib/fallbackData';
import { ContactFormWP } from '@/components/contact/ContactFormWP';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const metadata: Metadata = constructMetadata({
  title: 'Contact',
  description:
    'Turn your vision into reality. Complete the form and our experts will reach out to you regarding your requirements, or write to us directly at sales@zyntechlabs.io.',
  slug: 'contact',
});

export default function ContactPage() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#070b16] pt-28 pb-16">
      {/* Background grid + glow, matching the rest of the site's hero treatment */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415580_1px,transparent_1px),linear-gradient(to_bottom,#33415580_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_40%,transparent_100%)] opacity-30 pointer-events-none" />
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse,rgba(0,201,167,0.07)_0%,transparent_70%)] -z-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column: copy + trusted-by */}
          <ScrollReveal direction="right">
            <h1 className="font-display text-[32px] sm:text-[36px] md:text-[42px] font-extrabold tracking-tight leading-[1.2] text-white mb-4">
              Turn Vision Into Reality
            </h1>

            <ul className="space-y-2 mb-4 font-dm-sans text-gray-200 text-base list-disc list-inside marker:text-teal-400">
              <li>Our experts will get in touch with you shortly.</li>
              <li>We&apos;ll listen to your vision and objectives with full attention.</li>
              <li>Professional consultation and implementation strategy will be provided for you.</li>
            </ul>

            <p className="font-dm-sans font-light text-gray-400 text-base leading-relaxed mb-10">
              Complete the form below, and our experts will reach out to you regarding your
              requirements. You may also write to us at{' '}
              <a href="mailto:sales@zyntechlabs.io" className="text-teal-400 hover:underline">
                sales@zyntechlabs.io
              </a>{' '}
              <a href="mailto:Gary@zyntechlabs.io" className="text-teal-400 hover:underline">
                Gary@zyntechlabs.io
              </a>
            </p>

            <div>
              <h2 className="font-display text-white text-2xl font-bold mb-4">Trusted By</h2>
              <div className="slider-wrapper">
                <div className="marquee-track">
                  {[0, 1].map((set) => (
                    <div key={set} className="marquee-group">
                      {trustedByLogos.map((logo, i) => (
                        <Image
                          key={`${set}-${i}`}
                          src={logo}
                          alt="Client logo"
                          width={120}
                          height={50}
                          className="h-[50px] w-auto object-contain mx-8 brightness-0 invert-[.3]"
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right column: form */}
          <ScrollReveal direction="left">
            <ContactFormWP />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
