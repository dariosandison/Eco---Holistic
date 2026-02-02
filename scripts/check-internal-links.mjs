/**
 * Internal link checker (fast, no network).
 *
 * - Scans app/ to collect static routes (filesystem-based)
 * - Scans app/, components/, and content/ for internal href="/..." links
 * - Verifies targets exist as:
 *    - a static route, OR
 *    - a blog slug in content/blog (for /blog/<slug>), OR
 *    - an author slug in lib/authors.js (for /authors/<slug>), OR
 *    - a legacy /guides/<slug> (redirected to /blog/<slug>)
 */

import fs from 'fs'
import path from 'path'
import { pathToFileURL } from 'url'

const root = process.cwd()

function normalize(urlPath) {
  if (!urlPath) return '/'
  const clean = String(urlPath).split('#')[0].split('?')[0]
  if (clean === '/') return '/'
  return clean.replace(/\/+$/, '')
}

function isPageFile(name) {
  return /^page\.(js|jsx|ts|tsx)$/.test(name)
}

function isRouteGroup(seg) {
  return seg.startsWith('(') && seg.endsWith(')')
}

function shouldSkipSegment(seg) {
  if (!seg) return true
  if (seg.startsWith('.')) return true
  if (seg.startsWith('_')) return true
  return false
}

function collectStaticRoutes() {
  const appDir = path.join(root, 'app')
  const routes = new Set()

  function walk(dir, segments = []) {
    const entries = fs.readdirSync(dir, { withFileTypes: true })

    for (const ent of entries) {
      const full = path.join(dir, ent.name)

      if (ent.isDirectory()) {
        if (shouldSkipSegment(ent.name)) continue

        const nextSegments = isRouteGroup(ent.name) ? segments : [...segments, ent.name]
        walk(full, nextSegments)
        continue
      }

      if (ent.isFile() && isPageFile(ent.name)) {
        const route = '/' + segments.join('/')
        if (route.includes('[') || route.includes(']')) continue // dynamic
        routes.add(normalize(route || '/'))
      }
    }
  }

  if (fs.existsSync(appDir)) walk(appDir, [])

  // Common "file" routes we treat as valid.
  routes.add('/rss.xml')
  routes.add('/sitemap.xml')
  routes.add('/robots.txt')
  routes.add('/manifest.webmanifest')

  return routes
}

function blogSlugs() {
  const dir = path.join(root, 'content', 'blog')
  if (!fs.existsSync(dir)) return new Set()
  const slugs = new Set()
  for (const f of fs.readdirSync(dir)) {
    if (f.endsWith('.mdx') || f.endsWith('.md')) {
      slugs.add(f.replace(/\.(mdx|md)$/, ''))
    }
  }
  return slugs
}

async function authorSlugs() {
  const p = path.join(root, 'lib', 'authors.js')
  if (!fs.existsSync(p)) return new Set()

  try {
    const mod = await import(pathToFileURL(p).href)
    const AUTHORS = mod.AUTHORS || []
    return new Set(AUTHORS.map((a) => a.slug).filter(Boolean))
  } catch {
    return new Set()
  }
}

function isSkippableTarget(target) {
  if (!target) return true
  if (!target.startsWith('/')) return true
  if (target.startsWith('//')) return true
  if (target.startsWith('/api')) return true

  const c = normalize(target)
  const allowed = new Set([
    '/manifest.webmanifest',
    '/robots.txt',
    '/sitemap.xml',
    '/rss.xml',
  ])
  return allowed.has(c)
}

const scanDirs = [
  { dir: path.join(root, 'app'), exts: ['.js', '.jsx', '.ts', '.tsx'] },
  { dir: path.join(root, 'components'), exts: ['.js', '.jsx', '.ts', '.tsx'] },
  { dir: path.join(root, 'content'), exts: ['.mdx', '.md'] },
]

function listFiles(dir, exts) {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...listFiles(p, exts))
    else if (exts.includes(path.extname(entry.name))) out.push(p)
  }
  return out
}

const hrefRe = /href\s*=\s*(?:\{\s*)?["'](\/[^"']+)["']\s*(?:\}\s*)?/g
const mdLinkRe = /\[[^\]]+\]\((\/[^)]+)\)/g

const routes = collectStaticRoutes()
const blog = blogSlugs()
const authors = await authorSlugs()

function isOk(target) {
  const clean = normalize(target)

  if (routes.has(clean)) return true

  if (clean.startsWith('/blog/')) {
    const slug = clean.replace('/blog/', '')
    return blog.has(slug) || routes.has('/blog')
  }

  if (clean.startsWith('/guides/')) {
    const slug = clean.replace('/guides/', '')
    return blog.has(slug) || routes.has('/guides') || routes.has('/blog')
  }

  if (clean.startsWith('/authors/')) {
    const slug = clean.replace('/authors/', '')
    return authors.has(slug) || routes.has('/authors')
  }

  return false
}

const errors = []

for (const sd of scanDirs) {
  if (!fs.existsSync(sd.dir)) continue
  const files = listFiles(sd.dir, sd.exts)

  for (const file of files) {
    const txt = fs.readFileSync(file, 'utf8')
    let m

    while ((m = hrefRe.exec(txt))) {
      const target = m[1]
      if (isSkippableTarget(target)) continue
      if (!isOk(target)) errors.push({ file, target })
    }

    while ((m = mdLinkRe.exec(txt))) {
      const target = m[1]
      if (isSkippableTarget(target)) continue
      if (!isOk(target)) errors.push({ file, target })
    }
  }
}

if (errors.length) {
  console.error('Broken internal links found:')
  for (const e of errors) console.error(`- ${e.target}  (${e.file})`)
  process.exit(1)
} else {
  console.log('✅ Internal link check passed.')
}
