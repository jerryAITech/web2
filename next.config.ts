import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'zyntechlabs.io',
      },
    ],
  },
  // SEO 301 Redirects setup
  async redirects() {
    return [
      {
        source: '/portfolio',
        destination: '/case-studies',
        permanent: true,
      },
      {
        source: '/insights',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
