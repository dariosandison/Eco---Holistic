import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const runtime = 'nodejs'
export const revalidate = 3600

const REDIRECTED_ROUTES = new Set([
  '/best-of',
  '/recommended',
  '/favourites',
  '/picks',
  '/partners',
  '/picks/water',
  '/picks/sleep',
  '/picks/air-quality',
  '/picks/fragrance-free',
  '/guides',
  '/blog/sleep-naturally-without-overwhelm',
  '/blog/morning-light-for-better-sleep',
  '/blog/72-hour-water-plan-uk',
  '/blog/bamboo-toilet-paper-facts-duplicate',
  '/best-dehumidifiers-uk',
  '/best-dehumidifiers-uk-damp-mould',
  '/blog/damp-and-mould-uk-renters-guide',
  '/blog/damp-mould-renters-uk',
  '/blog/damp-mould-uk-renters-guide',
  '/blog/filter-replacement-costs',
  '/blog/water-filter-jug-vs-under-sink-filter-uk',
  '/free-list',
  '/free-shopping-list',
  '/shoppinglist',
])

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

function addPublishedBlogRoutes(routes) {
  const blogDir = path.join(process.cwd(), 'content', 'blog')
  if (!fs.existsSync(blogDir)) return

  for (const file of fs.readdirSync(blogDir)) {
    if (!file.endsWith('.mdx') || file.endsWith('-duplicate.mdx')) continue

    const slug = file.replace(/\.mdx$/, '')
    const route = `/blog/${slug}`
    if (REDIRECTED_ROUTES.has(route)) continue

    try {
      const raw = fs.readFileSync(path.join(blogDir, file), 'utf8')
      const { data } = matter(raw)
      if (data?.hidden === true || data?.draft === true || data?.noindex === true) continue
      routes.add(route)
    } catch (e) {
      // If a content file cannot be parsed, omit it rather than advertising an uncertain URL.
    }
  }
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

  for (const route of REDIRECTED_ROUTES) routes.delete(route)

  try {
    addPublishedBlogRoutes(routes)
  } catch (e) {
    // Keep sitemap functional if content filesystem access is unavailable.
  }

  for (const route of ['/authors/wild-and-well-founder', '/authors/wild-and-well-editorial', '/authors', '/rss', '/rss.xml']) routes.add(route)

  // Do not emit lastModified unless we have a reliable per-URL editorial date.
  return Array.from(routes)
    .filter((route) => !REDIRECTED_ROUTES.has(route))
    .sort((a, b) => a.localeCompare(b))
    .map((route) => ({ url: baseUrl + route }))
}
