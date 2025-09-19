/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: '/sitemap.xml', destination: '/sitemap' }, // serve /sitemap.xml from /sitemap
    ];
  },
};

module.exports = nextConfig;
