export const runtime = 'nodejs'

import { listContent, getContent } from '@/lib/content'

export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store'

  const items = listContent('blog')
    .map((i) => ({ ...i, type: 'blog' }))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 50)

  const feedItems = items
    .map((it) => {
      const { frontmatter } = getContent(it.type, it.slug)
      const link = `${base}/blog/${it.slug}`
      const pub = new Date(frontmatter.date || Date.now()).toUTCString()
      const desc = (frontmatter.description || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')

      return `
      <item>
        <title><![CDATA[${frontmatter.title}]]></title>
        <link>${link}</link>
        <guid isPermaLink="true">${link}</guid>
        <pubDate>${pub}</pubDate>
        <description><![CDATA[${desc}]]></description>
      </item>`
    })
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Wild & Well</title>
      <link>${base}</link>
      <description>Practical, low-tox living — insights, shortlists, and tips.</description>
      ${feedItems}
    </channel>
  </rss>`

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
