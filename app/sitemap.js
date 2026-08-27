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
  const routes = new Map()
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
        const cleanRoute = route === '/' ? '/' : route.replace(/\/+$/, '')
        routes.set(cleanRoute, fs.statSync(full).mtime)
      }
    }
  }
  walk(appDir, [])
  return routes
}

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store'
  const appDir = path.join(process.cwd(), 'app')
  const routeDates = new Map()

  try {
    for (const [route, modified] of collectRoutes(appDir)) routeDates.set(route, modified)
  } catch (e) {
    for (const route of ['/', '/shortlists', '/topics', '/blog', '/nutrition', '/movement', '/deals', '/shopping-list', '/about', '/contact', '/privacy', '/terms']) routeDates.set(route, null)
  }

  for (const legacy of ['/picks', '/partners', '/recommended', '/favourites', '/best-of']) routeDates.delete(legacy)

  try {
    const blogDir = path.join(process.cwd(), 'content', 'blog')
    if (fs.existsSync(blogDir)) {
      for (const file of fs.readdirSync(blogDir)) {
        if (!file.endsWith('.mdx') || file.endsWith('-duplicate.mdx')) continue
        routeDates.set(`/blog/${file.replace(/\.mdx$/, '')}`, fs.statSync(path.join(blogDir, file)).mtime)
      }
    }
  } catch (e) {
    // Keep sitemap functional if content filesystem metadata is unavailable.
  }

  for (const route of ['/authors/wild-and-well-founder', '/authors/wild-and-well-editorial', '/authors', '/rss', '/rss.xml']) {
    if (!routeDates.has(route)) routeDates.set(route, null)
  }

  return Array.from(routeDates.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([route, modified]) => ({ url: baseUrl + route, ...(modified ? { lastModified: modified } : {}) }))
}
