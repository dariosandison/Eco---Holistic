// scripts/generate-rss.mjs
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const siteUrl = 'https://www.wild-and-well.store';
const publicDir = path.join(process.cwd(), 'public');
const siteTitle = 'Wild & Well — New Guides, Reviews & Blog';
const siteDesc  = 'Actionable guides, hands-on reviews, and honest notes from the team.';

// Convert various date shapes to a numeric timestamp (ms since epoch)
function toTs(d) {
  if (!d) return 0;
  if (d instanceof Date) return d.getTime();
  const t = Date.parse(d);
  return Number.isNaN(t) ? 0 : t;
}

// Normalize to ISO string for feed output
function toISO(d) {
  if (d instanceof Date) return d.toISOString();
  const t = toTs(d);
  return t ? new Date(t).toISOString() : new Date().toISOString();
}

function collect(dir, basePath) {
  const full = path.join(process.cwd(), dir);
  if (!fs.existsSync(full)) return [];
  const files = fs.readdirSync(full).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));

  const list = files.map(f => {
    const slug = f.replace(/\.(md|mdx)$/,'');
    const raw = fs.readFileSync(path.join(full, f), 'utf8');
    const { data, content } = matter(raw);

    const url = `${siteUrl}${basePath}/${slug}`;
    const title = data.title || slug.replace(/-/g,' ');
    const description = data.description || ((content || '').trim().slice(0,180) + '…');
    // Prefer updated → date → now; always store as ISO string
    const dateISO = toISO(data.updated || data.date || new Date());

    return { url, title, description, dateISO };
  });

  // Sort newest first using timestamps
  list.sort((a,b) => toTs(b.dateISO) - toTs(a.dateISO));
  return list;
}

function rssEscape(s='') {
  return s
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;');
}

function generate() {
  const items = [
    ...collect('content/guides','/guides'),
    ...collect('content/reviews','/reviews'),
    ...collect('content/blog','/blog')
  ].slice(0, 25);

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>${rssEscape(siteTitle)}</title>
  <link>${siteUrl}</link>
  <description>${rssEscape(siteDesc)}</description>
  <language>en</language>
  ${items.map(i => `
  <item>
    <title>${rssEscape(i.title)}</t
