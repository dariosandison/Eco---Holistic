import { listContent } from '@/lib/content'
export const dynamic = 'force-static'
export default function sitemap() {
  const now = new Date().toISOString()
  const map = (base, kind) =>
    listContent(kind).map(({ slug, updated, date }) => ({
      url: `https://www.wild-and-well.store/${base}/${slug}`,
      lastModified: updated || date || now,
    }))
  return [
    { url: 'https://www.wild-and-well.store/' },
    ...map('guides', 'guides'),
    ...map('blog', 'blog'),
  ]
}
