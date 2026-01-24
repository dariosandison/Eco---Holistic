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
    '/affiliate-disclosure',
    '/privacy',
    '/terms',
    '/contact',
    '/best-water-filters-uk',
    '/best-natural-sleep-support',
    '/best-air-purifiers-small-flats-uk',
    '/best-shower-filters-uk-hard-water',
    '/best-fragrance-free-laundry-detergents-uk',
    '/best-non-toxic-cookware-starter',
    '/best-humidifiers-for-bedrooms-uk',
    '/best-air-purifiers-allergies-uk',
    '/best-herbal-remedies-for-stress-anxiety',
    '/best-organic-supplements-beginners',
    '/best-adaptogens-beginners-guide',
    '/best-organic-protein-powders-uk',
    '/best-anti-inflammatory-foods-shopping-list',
    '/best-gut-health-supplements-beginners',
    '/best-natural-sleep-remedies-non-pharma',
    '/best-organic-snacks-healthy',
    '/best-natural-immune-support-remedies',
    '/best-organic-cooking-oils-uk',
    '/best-detox-support-foods',
    '/best-holistic-wellness-starter-kit',
    '/best-low-tox-products-for-beginners',
    '/shopping-list',
    '/shopping-list/thanks',
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
