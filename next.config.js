// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    // Add remote patterns if you start using external images
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'merchant.example.com' }
    ]
  },

  async headers() {
    return [
      // Strong caching for Next static assets
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      },
      // Cache public static assets (images, svg, etc.)
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|webp|ico)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      },
      // Keep /go/* out of the index entirely
      {
        source: '/go/:slug*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
          { key: 'Cache-Control', value: 'public, max-age=60' }
        ]
      }
    ];
  },

  async redirects() {
    return [
      // Legal redirects
      { source: '/affiliate-disclosure', destination: '/legal/affiliate-disclosure', permanent: true },
      { source: '/product-disclosure', destination: '/legal/product-disclosure', permanent: true },
      { source: '/cookies', destination: '/legal/cookies', permanent: true },
      { source: '/disclaimer', destination: '/legal/disclaimer', permanent: true },
      { source: '/privacy', destination: '/legal/privacy', permanent: true }
    ];
  }
};

module.exports = nextConfig;
