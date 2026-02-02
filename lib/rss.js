import { listContent, getContent } from './content'

function escapeXml(text) {
  return String(text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export function buildRssXml({ base }) {
  const items = listContent('blog')
    .map((i) => ({ ...i, type: 'blog' }))
    .sort((a, b) => new Date(b.updated || b.date || 0) - new Date(a.updated || a.date || 0))
    .slice(0, 50)

  const feedItems = items
    .map((it) => {
      const { frontmatter } = getContent(it.type, it.slug)
      const link = `${base}/blog/${it.slug}`
      const pub = new Date(frontmatter.date || Date.now()).toUTCString()
      const desc = escapeXml(frontmatter.description || '')

      return `\n      <item>\n        <title><![CDATA[${frontmatter.title}]]></title>\n        <link>${link}</link>\n        <guid isPermaLink="true">${link}</guid>\n        <pubDate>${pub}</pubDate>\n        <description><![CDATA[${desc}]]></description>\n      </item>`
    })
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Wild & Well</title>
      <link>${base}</link>
      <description>Practical, low-tox living — educational guides, shortlists, and tips.</description>
      <language>en-gb</language>
      ${feedItems}
    </channel>
  </rss>`

  return xml
}
