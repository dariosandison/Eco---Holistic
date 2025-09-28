// scripts/generate-rss.mjs
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const siteUrl = 'https://www.wild-and-well.store';
const publicDir = path.join(process.cwd(), 'public');
const siteTitle = 'Wild & Well — New Guides & Reviews';
const siteDesc  = 'Actionable, low-tox guides and hands-on product reviews.';

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
    const description = data.description || (content.trim().slice(0,180) + '…');
    const date = data.updated || data.date || new Date().toISOString();
    return { url, title, description, date };
  });
  list.sort((a,b) => (b.date || '').localeCompare(a.date || ''));
  return list;
}

function rssEscape(s='') {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function generate() {
  const items = [...collect('content/guides','/guides'), ...collect('content/reviews','/reviews')].slice(0, 25);
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>${rssEscape(siteTitle)}</title>
  <link>${siteUrl}</link>
  <description>${rssEscape(siteDesc)}</description>
  <language>en</language>
  ${items.map(i => `
  <item>
    <title>${rssEscape(i.title)}</title>
    <link>${i.url}</link>
    <guid>${i.url}</guid>
    <pubDate>${new Date(i.date).toUTCString()}</pubDate>
    <description>${rssEscape(i.description)}</description>
  </item>`).join('')}
</channel>
</rss>`;
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(path.join(publicDir, 'feed.xml'), rss, 'utf8');
  console.log('✓ feed.xml generated');
}

generate();
