import fs from 'fs'
import path from 'path'

import { listContent } from '@/lib/content'
import { AUTHORS } from '@/lib/authors'

export const runtime = 'nodejs'

function xmlEscape(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function normalizeRoute(r) {
  if (!r) return '/'
  if (r === '/') return '/'
  return r.replace(/\/+$/, '')
}

function listTopicRoutes() {
  try {
    const dir = path.join(process.cwd(), 'app', 'topics')
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    return entries
      .filter((e) => e.isDirectory())
      .map((e) => `/topics/${e.name}`)
  } catch {
    return []
  }
}

function nowIso() {
  return new Date().toISOString()
}

function makeUrlset(baseUrl, items) {
  const body = items
    .map(({ loc, lastmod }) => {
      const lm = lastmod ? `<lastmod>${xmlEscape(lastmod)}</lastmod>` : ''
      return `<url><loc>${xmlEscape(loc)}</loc>${lm}</url>`
    })
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>`
}

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store'
  const iso = nowIso()

  // Core static routes (keep this conservative; blog posts carry most coverage).
  const staticRoutes = [
    '/',
    '/blog',
    '/topics',
    '/nutrition',
    '/movement',
    '/favourites',
    '/deals',
    '/shopping-list',
    '/about',
    '/contact',
    '/how-we-test',
    '/editorial-policy',
    '/affiliate-disclosure',
    '/privacy',
    '/terms',
    '/cookies',
    '/authors',
  ]

  const topicRoutes = listTopicRoutes()

  const blogRoutes = (() => {
    try {
      return listContent('blog').map((p) => ({
        route: `/blog/${p.slug}`,
        lastModified: new Date(p.updated || p.date || iso).toISOString(),
      }))
    } catch {
      return []
    }
  })()

  const authorRoutes = (AUTHORS || []).map((a) => ({
    route: `/authors/${a.slug}`,
    lastModified: iso,
  }))

  const all = [
    ...staticRoutes.map((r) => ({ route: normalizeRoute(r), lastModified: iso })),
    ...topicRoutes.map((r) => ({ route: normalizeRoute(r), lastModified: iso })),
    ...blogRoutes,
    ...authorRoutes,
  ]

  // De-dupe and stable sort.
  const byRoute = new Map()
  for (const item of all) {
    const route = normalizeRoute(item.route)
    if (!byRoute.has(route)) byRoute.set(route, item)
  }

  const items = [...byRoute.values()].sort((a, b) => a.route.localeCompare(b.route))

  const xml = makeUrlset(
    baseUrl,
    items.map((i) => ({
      loc: `${baseUrl}${i.route === '/' ? '' : i.route}`,
      lastmod: i.lastModified,
    }))
  )

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600',
    },
  })
}
