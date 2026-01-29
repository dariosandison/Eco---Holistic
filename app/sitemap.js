export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store'

  const staticRoutes = [
    '/',
    '/favourites',
    '/topics',
    '/topics/sleep',
    '/topics/air-quality',
    '/topics/water',
    '/topics/fragrance-free',
    '/blog',
    '/nutrition',
    '/movement',
    '/deals',
    '/shopping-list',
    '/how-we-test',
    '/editorial-policy',
    '/affiliate-disclosure',
    '/product-disclosure',
    '/about',
    '/contact',
    '/cookies',
    '/corrections',
    '/privacy',
    '/terms',
  ]

  return staticRoutes.map((route) => ({
    url: baseUrl + route,
    lastModified: new Date().toISOString(),
  }))
}
