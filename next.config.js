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
      // Legacy routes (we no longer use the term "picks" in the UI)
      { source: '/best-of', destination: '/topics', permanent: true },
      { source: '/recommended', destination: '/topics', permanent: true },
      { source: '/favourites', destination: '/topics', permanent: true },

      // Legacy pages
      { source: '/picks', destination: '/topics', permanent: true },
      { source: '/partners', destination: '/topics', permanent: true },

      // Legacy sub-pages
      { source: '/picks/water', destination: '/topics/water', permanent: true },
      { source: '/picks/sleep', destination: '/topics/sleep', permanent: true },
      { source: '/picks/air-quality', destination: '/topics/air-quality', permanent: true },
      { source: '/picks/fragrance-free', destination: '/topics/fragrance-free', permanent: true },

      { source: '/guides', destination: '/blog', permanent: true },
      { source: '/guides/:slug*', destination: '/blog/:slug*', permanent: true },
      { source: '/blog/sleep-naturally-without-overwhelm', destination: '/blog/sleep-naturally-simple-guide', permanent: true },

      // Common shorthand URLs
      { source: '/free-list', destination: '/shopping-list', permanent: true },
      { source: '/free-shopping-list', destination: '/shopping-list', permanent: true },
      { source: '/shoppinglist', destination: '/shopping-list', permanent: true },
    ]
  },
}

module.exports = nextConfig
