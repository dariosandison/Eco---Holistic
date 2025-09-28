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

function buildItemXML(item) {
  return [
    '  <item>',
    `    <title>${rssEscape(item.title)}</title>`,
    `    <link>${item.url}</link>`,
    `    <guid>${item.url}</guid>`,
    `    <pubDate>${new Date(item.dateISO).toUTCString()}</pubDate>`,
    `    <description>${rssEscape(item.description)}</description>`,
    '  </item>'
  ].join('\n');
}

function generate() {
  const items = [
    ...collect('content/guides','/guides'),
    ...collect('content/reviews','/reviews'),
    ...collect('content/blog','/blog')
  ].slice(0, 25);

  const parts = [];
  parts.push('<?xml version="1.0" encoding="UTF-8"?>');
  parts.push('<rss version="2.0">');
  parts.push('<channel>');
  parts.push(`  <title>${rssEscape(siteTitle)}</title>`);
  parts.push(`  <link>${siteUrl}</link>`);
  parts.push(`  <description>${rssEscape(siteDesc)}</description>`);
  parts.push('  <language>en</language>');
  items.forEach(i => parts.push(buildItemXML(i)));
  parts.push('</channel>');
  parts.push('</rss>');

  const rss = parts.join('\n');

  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(path.join(publicDir, 'feed.xml'), rss, 'utf8');
  console.log(`✓ feed.xml generated (${items.length} items)`);
}

generate();
