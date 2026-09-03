/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
      // Legacy discovery routes
      { source: '/best-of', destination: '/topics', permanent: true },
      { source: '/recommended', destination: '/topics', permanent: true },
      { source: '/favourites', destination: '/topics', permanent: true },
      { source: '/picks', destination: '/topics', permanent: true },
      { source: '/partners', destination: '/topics', permanent: true },
      { source: '/picks/water', destination: '/topics/water', permanent: true },
      { source: '/picks/sleep', destination: '/topics/sleep', permanent: true },
      { source: '/picks/air-quality', destination: '/topics/air-quality', permanent: true },
      { source: '/picks/fragrance-free', destination: '/topics/fragrance-free', permanent: true },

      // Consolidate duplicate guide/blog routes onto the canonical editorial library
      { source: '/guides', destination: '/blog', permanent: true },
      { source: '/guides/:slug*', destination: '/blog/:slug*', permanent: true },
      { source: '/blog/sleep-naturally-without-overwhelm', destination: '/blog/sleep-naturally-simple-guide', permanent: true },
      { source: '/blog/morning-light-for-better-sleep', destination: '/blog/morning-light-sleep-10-minute-plan', permanent: true },
      { source: '/blog/72-hour-water-plan-uk', destination: '/blog/72-hour-household-water-plan-uk', permanent: true },
      { source: '/blog/bamboo-toilet-paper-facts-duplicate', destination: '/blog/bamboo-toilet-paper-facts', permanent: true },

      // Duplicate aliases retained for backlinks but consolidated to one useful URL
      { source: '/best-dehumidifiers-uk', destination: '/best-dehumidifiers-damp-mould-uk', permanent: true },
      { source: '/best-dehumidifiers-uk-damp-mould', destination: '/best-dehumidifiers-damp-mould-uk', permanent: true },
      { source: '/blog/damp-and-mould-uk-renters-guide', destination: '/blog/damp-and-mould-uk-renters-playbook', permanent: true },
      { source: '/blog/damp-mould-renters-uk', destination: '/blog/damp-and-mould-uk-renters-playbook', permanent: true },
      { source: '/blog/damp-mould-uk-renters-guide', destination: '/blog/damp-and-mould-uk-renters-playbook', permanent: true },
      { source: '/blog/filter-replacement-costs', destination: '/blog/filter-replacement-costs-uk', permanent: true },
      { source: '/blog/water-filter-jug-vs-under-sink-filter-uk', destination: '/blog/water-filter-jug-vs-under-sink-uk', permanent: true },

      // Common shorthand URLs
      { source: '/free-list', destination: '/shopping-list', permanent: true },
      { source: '/free-shopping-list', destination: '/shopping-list', permanent: true },
      { source: '/shoppinglist', destination: '/shopping-list', permanent: true },
    ]
  },
}

module.exports = nextConfig
