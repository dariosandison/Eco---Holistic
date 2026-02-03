/**
 * Internal link checker (fast, no network).
 *
 * - Uses app/sitemap.js to collect static routes
 * - Scans app/, components/, and content/ for internal href="/..." links
 * - Verifies targets exist as:
 *    - a static route (from sitemap), OR
 *    - a blog slug in content/blog (for /blog/<slug>), OR
 *    - a blog slug for /guides/<slug> (guides redirect), OR
 *    - an author slug in lib/authors.js (for /authors/<slug>)
 */

import fs from 'fs'
import path from 'path'
import { pathToFileURL } from 'url'

const root = process.cwd()

function readText(p) {
  return fs.readFileSync(p, 'utf8')
}

function listFiles(dir, exts) {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...listFiles(p, exts))
    else if (exts.includes(path.extname(entry.name))) out.push(p)
  }
  return out
}

async function routesFromSitemap() {
  const p = path.join(root, 'app', 'sitemap.js')
  if (!fs.existsSync(p)) return new Set()

  try {
    const mod = await import(pathToFileURL(p).href)
    const entries = await mod.default()
    const routes = new Set()

    for (const e of entries || []) {
      try {
        const u = new URL(e.url)
        const pathname = u.pathname || '/'
        routes.add(normalize(pathname))
      } catch {
        // ignore
      }
    }

    return routes
  } catch (e) {
    return new Set()
  }
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
  } catch (e) {
    return new Set()
  }
}

function normalize(urlPath) {
  if (!urlPath) return '/'
  const clean = String(urlPath).split('#')[0].split('?')[0]
  if (clean === '/') return '/'
  return clean.replace(/\/+$/, '')
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

const hrefRe = /href\s*=\s*(?:\{\s*)?["'](\/[^"']+)["']\s*(?:\}\s*)?/g
const mdLinkRe = /\[[^\]]+\]\((\/[^)]+)\)/g

const routes = await routesFromSitemap()
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
    return blog.has(slug) || routes.has('/guides')
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
    const txt = readText(file)
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
