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
      { source: '/best-of', destination: '/favourites', permanent: true },
      { source: '/recommended', destination: '/favourites', permanent: true },
      { source: '/picks', destination: '/topics', permanent: true },
      { source: '/picks/:path*', destination: '/topics/:path*', permanent: true },
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
