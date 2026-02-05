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

        // Next.js route groups (e.g. (marketing)) do not appear in the URL.
        const nextSegments = isRouteGroup(ent.name) ? segments : [...segments, ent.name]
        walk(full, nextSegments)
        continue
      }

      if (ent.isFile() && isPageFile(ent.name)) {
        const route = '/' + segments.join('/')
        // Skip dynamic routes (e.g. blog/[slug])
        if (route.includes('[') || route.includes(']')) continue
        routes.add(route === '/' ? '/' : route.replace(/\/+$/, ''))
      }
    }
  }

  walk(appDir, [])
  return [...routes]
}

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store'
  const appDir = path.join(process.cwd(), 'app')

  let routes = []
  try {
    routes = collectRoutes(appDir)
  } catch (e) {
    // Fallback: keep the sitemap working even if filesystem access is unavailable.
    routes = [
      '/',
      '/picks',
      '/topics',
      '/blog',
      '/nutrition',
      '/movement',
      '/deals',
      '/shopping-list',
      '/about',
      '/contact',
      '/privacy',
      '/terms',
    ]
  }

  // Stable ordering helps caching and diffing.
  // Filter out legacy redirect-only routes so Google indexes the canonical versions.
  routes = routes.filter((r) => !['/picks', '/recommended'].includes(r))
  routes.sort((a, b) => a.localeCompare(b))

  // Include blog posts and known author pages.
  try {
    const blogDir = path.join(process.cwd(), 'content', 'blog')
    if (fs.existsSync(blogDir)) {
      for (const file of fs.readdirSync(blogDir)) {
        if (file.endsWith('.mdx') && !file.endsWith('-duplicate.mdx')) {
          const slug = file.replace(/\.mdx$/, '')
          routes.push(`/blog/${slug}`)
        }
      }
    }
  } catch (e) {
    // ignore and keep sitemap functional
  }

  // Author profile pages (keep in sync with lib/authors.js)
  routes.push('/authors/wild-and-well-founder')
  routes.push('/authors/wild-and-well-editorial')
  routes.push('/authors')

  // RSS feeds
  routes.push('/rss')
  routes.push('/rss.xml')
  const now = new Date().toISOString()
  const unique = Array.from(new Set(routes)).sort((a,b)=>a.localeCompare(b))
  return unique.map((route) => ({
    url: baseUrl + route,
    lastModified: now,
  }))
}