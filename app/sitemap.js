import { listContent } from '@/lib/content'

export default async function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store'

  const staticRoutes = ['', '/guides', '/blog', '/deals', '/privacy-policy', '/terms', '/affiliate-disclosure']
    .map((p) => ({ url: `${base}${p}`, lastModified: new Date() }))

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
