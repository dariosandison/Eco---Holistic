import fs from 'fs'
import path from 'path'

export const runtime = 'nodejs'
export const revalidate = 3600

function isPageFile(name) {
  return /^page\.(js|jsx|ts|tsx)$/.test(name)
}

function shouldSkipSegment(seg) {
  if (!seg) return true
  if (seg.startsWith('.')) return true
  if (seg.startsWith('_')) return true
  return false
}

function isRouteGroup(seg) {
  return seg.startsWith('(') && seg.endsWith(')')
}

function collectRoutes(appDir) {
  const routes = new Set()

  function walk(dir, segments = []) {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    for (const ent of entries) {
      const full = path.join(dir, ent.name)
      if (ent.isDirectory()) {
        if (shouldSkipSegment(ent.name)) continue
        walk(full, isRouteGroup(ent.name) ? segments : [...segments, ent.name])
        continue
      }
      if (ent.isFile() && isPageFile(ent.name)) {
        const route = '/' + segments.join('/')
        if (route.includes('[') || route.includes(']')) continue
        routes.add(route === '/' ? '/' : route.replace(/\/+$/, ''))
      }
    }
  }

  walk(appDir, [])
  return routes
}

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store'
  const appDir = path.join(process.cwd(), 'app')
  const routes = new Set()

  try {
    for (const route of collectRoutes(appDir)) routes.add(route)
  } catch (e) {
    for (const route of ['/', '/shortlists', '/topics', '/blog', '/nutrition', '/movement', '/deals', '/shopping-list', '/about', '/contact', '/privacy', '/terms']) routes.add(route)
  }

  for (const legacy of ['/picks', '/partners', '/recommended', '/favourites', '/best-of']) routes.delete(legacy)

  try {
    const blogDir = path.join(process.cwd(), 'content', 'blog')
    if (fs.existsSync(blogDir)) {
      for (const file of fs.readdirSync(blogDir)) {
        if (!file.endsWith('.mdx') || file.endsWith('-duplicate.mdx')) continue
        routes.add(`/blog/${file.replace(/\.mdx$/, '')}`)
      }
    }
  } catch (e) {
    // Keep sitemap functional if content filesystem access is unavailable.
  }

  for (const route of ['/authors/wild-and-well-founder', '/authors/wild-and-well-editorial', '/authors', '/rss', '/rss.xml']) routes.add(route)

  // Do not emit lastModified unless we have a reliable per-URL editorial date.
  // Build/deploy filesystem mtimes can change without the page itself changing.
  return Array.from(routes)
    .sort((a, b) => a.localeCompare(b))
    .map((route) => ({ url: baseUrl + route }))
}
