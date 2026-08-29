import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Analytics } from '@/components/analytics/Analytics';
import { getSiteSettings } from '@/sanity/client';
import { constructMetadata } from '@/lib/seo';

export const viewport: Viewport = {
  themeColor: '#070b16',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return constructMetadata({
    title: settings.defaultTitle,
    description: settings.defaultDescription,
    settings,
  });
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/zyntech_logo.svg" />
        <link rel="apple-touch-icon" href="/zyntech_logo.svg" />
      </head>
      <body className="bg-[#070b16] text-gray-100 font-sans antialiased selection:bg-teal-500 selection:text-black">
        {/* Tracking Scripts */}
        <Analytics
          ga4Id={settings.ga4Id}
          gtmId={settings.gtmId}
          googleVerification={settings.googleVerification}
        />

        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
