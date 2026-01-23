import { listContent } from '@/lib/content'

export default async function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store'

  const staticRoutes = [
    '',
    '/recommended',
    '/guides',
    '/blog',
    '/deals',
    '/how-we-test',
    '/editorial-policy',
    '/product-disclosure',
    '/privacy',
    '/terms',
    '/contact',
    '/best-water-filters-uk',
    '/best-natural-sleep-support',
    '/best-low-tox-products-for-beginners',
    '/shopping-list',
  ].map((p) => ({ url: `${base}${p}`, lastModified: new Date() }))

  const guideRoutes = listContent('guides').map((g) => ({
    url: `${base}/guides/${g.slug}`,
    lastModified: g.updated || g.date || new Date(),
  }))

  const blogRoutes = listContent('blog').map((b) => ({
    url: `${base}/blog/${b.slug}`,
    lastModified: b.updated || b.date || new Date(),
  }))

  return [...staticRoutes, ...guideRoutes, ...blogRoutes]
}
