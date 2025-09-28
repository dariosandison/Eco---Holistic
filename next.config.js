// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/affiliate-disclosure', destination: '/legal/affiliate-disclosure', permanent: true },
      { source: '/product-disclosure', destination: '/legal/product-disclosure', permanent: true },
      { source: '/cookies', destination: '/legal/cookies', permanent: true },
      { source: '/disclaimer', destination: '/legal/disclaimer', permanent: true },
      { source: '/privacy', destination: '/legal/privacy', permanent: true }
    ];
  }
};

module.exports = nextConfig;
