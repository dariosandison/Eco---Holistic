/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'm.media-amazon.com' },
      { protocol: 'https', hostname: '**.images-amazon.com' },
      { protocol: 'https', hostname: 'images-na.ssl-images-amazon.com' },
      { protocol: 'https', hostname: '**.amazonaws.com' },
    ],
  },
  async redirects() {
    return [
      // Legacy routes
      { source: '/best-of', destination: '/picks', permanent: true },
      { source: '/recommended', destination: '/picks', permanent: true },
      { source: '/favourites', destination: '/picks', permanent: true },

      // Legacy picks sub-pages -> canonical filtered picks
      { source: '/picks/water', destination: '/picks?tag=Water', permanent: true },
      { source: '/picks/sleep', destination: '/picks?tag=Sleep', permanent: true },
      { source: '/picks/air-quality', destination: '/picks?tag=Air', permanent: true },
      { source: '/picks/fragrance-free', destination: '/picks?tag=Laundry', permanent: true },

      { source: '/guides', destination: '/blog', permanent: true },
      { source: '/guides/:slug*', destination: '/blog/:slug*', permanent: true },
      { source: '/blog/sleep-naturally-without-overwhelm', destination: '/blog/sleep-naturally-simple-guide', permanent: true },
      // Common shorthand URLs
      { source: '/free-list', destination: '/shopping-list', permanent: true },
      { source: '/free-shopping-list', destination: '/shopping-list', permanent: true },
      { source: '/shoppinglist', destination: '/shopping-list', permanent: true },
    ]
  },
};

module.exports = nextConfig;
