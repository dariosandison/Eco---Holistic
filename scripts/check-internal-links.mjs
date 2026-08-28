/**
 * Internal link checker (fast, no network).
 *
 * Checks links against both the public sitemap and real static app routes.
 * This matters because a few legacy/utility pages intentionally exist but are
 * excluded from the sitemap; they should not be reported as 404s.
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

function normalize(urlPath) {
  if (!urlPath) return '/'
  const clean = String(urlPath).split('#')[0].split('?')[0]
  if (clean === '/') return '/'
  return clean.replace(/\/+$/, '')
}

function routesFromApp() {
  const appDir = path.join(root, 'app')
  const routes = new Set()
  if (!fs.existsSync(appDir)) return routes

  function walk(dir, segments = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        if (entry.name.startsWith('.') || entry.name.startsWith('_')) continue
        const next = entry.name.startsWith('(') && entry.name.endsWith(')') ? segments : [...segments, entry.name]
        walk(full, next)
        continue
      }
      if (!/^page\.(js|jsx|ts|tsx)$/.test(entry.name)) continue
      const route = '/' + segments.join('/')
      if (route.includes('[') || route.includes(']')) continue
      routes.add(normalize(route))
    }
  }

  walk(appDir)
  return routes
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
        routes.add(normalize(new URL(e.url).pathname || '/'))
      } catch {
        // Ignore malformed sitemap entries here; the build will surface them separately.
      }
    }
    return routes
  } catch {
    return new Set()
  }
}

function blogSlugs() {
  const dir = path.join(root, 'content', 'blog')
  if (!fs.existsSync(dir)) return new Set()
  const slugs = new Set()
  for (const f of fs.readdirSync(dir)) {
    if (f.endsWith('.mdx') || f.endsWith('.md')) slugs.add(f.replace(/\.(mdx|md)$/, ''))
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
  if (!target || !target.startsWith('/') || target.startsWith('//') || target.startsWith('/api')) return true
  const c = normalize(target)
  return new Set(['/manifest.webmanifest', '/robots.txt', '/sitemap.xml', '/rss.xml']).has(c)
}

const scanDirs = [
  { dir: path.join(root, 'app'), exts: ['.js', '.jsx', '.ts', '.tsx'] },
  { dir: path.join(root, 'components'), exts: ['.js', '.jsx', '.ts', '.tsx'] },
  { dir: path.join(root, 'content'), exts: ['.mdx', '.md'] },
]

const hrefRe = /href\s*=\s*(?:\{\s*)?["'](\/[^"']+)["']\s*(?:\}\s*)?/g
const mdLinkRe = /\[[^\]]+\]\((\/[^)]+)\)/g

const routes = await routesFromSitemap()
for (const route of routesFromApp()) routes.add(route)
const blog = blogSlugs()
const authors = await authorSlugs()

function isOk(target) {
  const clean = normalize(target)
  if (routes.has(clean)) return true

  if (clean.startsWith('/blog/')) {
    const slug = clean.replace('/blog/', '')
    return blog.has(slug)
  }
  if (clean.startsWith('/guides/')) {
    const slug = clean.replace('/guides/', '')
    return blog.has(slug) || routes.has(clean)
  }
  if (clean.startsWith('/authors/')) {
    const slug = clean.replace('/authors/', '')
    return authors.has(slug)
  }
  return false
}

const errors = []
for (const sd of scanDirs) {
  if (!fs.existsSync(sd.dir)) continue
  for (const file of listFiles(sd.dir, sd.exts)) {
    const txt = readText(file)
    let m
    while ((m = hrefRe.exec(txt))) {
      const target = m[1]
      if (!isSkippableTarget(target) && !isOk(target)) errors.push({ file, target })
    }
    while ((m = mdLinkRe.exec(txt))) {
      const target = m[1]
      if (!isSkippableTarget(target) && !isOk(target)) errors.push({ file, target })
    }
  }
}

if (errors.length) {
  console.error('Broken internal links found:')
  for (const e of errors) console.error(`- ${e.target}  (${e.file})`)
  process.exit(1)
}

console.log(`✅ Internal link check passed across ${routes.size} static routes.`)
