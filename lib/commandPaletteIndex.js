import { listContent } from '@/lib/content'
import { SHORTLIST_SECTIONS, flattenShortlists } from '@/lib/shortlistsData'

export function buildCommandPaletteIndex() {
  const out = []

  // Quick actions (always shown first when empty query)
  out.push(
    { title: 'Search the site', href: '/search', kind: 'Action', badge: 'Ctrl/⌘ K' },
    { title: 'Start here', href: '/start-here', kind: 'Action' },
    { title: 'Browse Shortlists', href: '/shortlists', kind: 'Action' },
    { title: 'Browse Topics', href: '/topics', kind: 'Action' },
    { title: 'Wellness Insights (Blog)', href: '/blog', kind: 'Action' },
    { title: 'Free Low‑Tox Shopping List', href: '/shopping-list', kind: 'Action' },
    { title: 'Deals', href: '/deals', kind: 'Action' },
  )

  // Topics
  out.push(
    { title: 'Topic: Sleep & recovery', href: '/topics/sleep', kind: 'Topic', desc: 'Light, timing, temperature, and practical next steps.' },
    { title: 'Topic: Air quality (allergies + damp)', href: '/topics/air-quality', kind: 'Topic', desc: 'HEPA basics, damp control, and buying guidance.' },
    { title: 'Topic: Water (filters + hydration)', href: '/topics/water', kind: 'Topic', desc: 'Under-sink vs jugs, running costs, and simple choices.' },
    { title: 'Topic: Fragrance‑free home', href: '/topics/fragrance-free', kind: 'Topic', desc: 'Laundry + cleaning swaps for sensitive households.' },
  )

  // Shortlists
  try {
    const flat = flattenShortlists(SHORTLIST_SECTIONS)
    flat.forEach((it) => {
      out.push({
        title: it.label,
        href: it.href,
        kind: 'Shortlist',
        desc: it.desc,
        tags: [it.tag, it._sectionTitle].filter(Boolean),
      })
    })
  } catch (e) {
    // ignore
  }

  // Blog posts
  try {
    const posts = listContent('blog')
    posts.forEach((p) => {
      out.push({
        title: p.title,
        href: `/blog/${p.slug}`,
        kind: 'Insight',
        desc: p.description || p.excerpt || '',
        tags: Array.isArray(p.tags) ? p.tags : [],
      })
    })
  } catch (e) {
    // ignore
  }

  // Basic pages
  out.push(
    { title: 'About Wild & Well', href: '/about', kind: 'Page' },
    { title: 'How we test', href: '/how-we-test', kind: 'Page' },
    { title: 'Editorial policy', href: '/editorial-policy', kind: 'Page' },
    { title: 'Affiliate disclosure', href: '/affiliate-disclosure', kind: 'Page' },
    { title: 'Contact', href: '/contact', kind: 'Page' },
  )

  // De-duplicate by href+title
  const seen = new Set()
  return out.filter((it) => {
    const k = `${it.href}::${it.title}`
    if (seen.has(k)) return false
    seen.add(k)
    return true
  })
}
