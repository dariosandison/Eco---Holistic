// scripts/generate-sitemap.mjs
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import hubs from '../data/hubs.js';

const siteUrl = 'https://www.wild-and-well.store';
const publicDir = path.join(process.cwd(), 'public');
const guidesDir = path.join(process.cwd(), 'content/guides');

function getGuides() {
  if (!fs.existsSync(guidesDir)) return [];
  const files = fs.readdirSync(guidesDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
  return files.map(f => {
    const slug = f.replace(/\.(md|mdx)$/,'');
    const raw = fs.readFileSync(path.join(guidesDir, f), 'utf8');
    const { data } = matter(raw);
    const lastmod = data.updated || data.date || new Date().toISOString().slice(0,10);
    return { loc: `${siteUrl}/guides/${slug}`, lastmod };
  });
}

function xmlEscape(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function generate() {
  const urls = [
    { loc: `${siteUrl}/`, lastmod: new Date().toISOString().slice(0,10), priority: '1.0' },
    { loc: `${siteUrl}/guides`, lastmod: new Date().toISOString().slice(0,10), priority: '0.9' },
    { loc: `${siteUrl}/deals`, lastmod: new Date().toISOString().slice(0,10), priority: '0.6' },
    { loc: `${siteUrl}/search`, lastmod: new Date().toISOString().slice(0,10), priority: '0.3' },
    { loc: `${siteUrl}/affiliate-disclosure`, lastmod: new Date().toISOString().slice(0,10), priority: '0.2' },
    { loc: `${siteUrl}/product-disclosure`, lastmod: new Date().toISOString().slice(0,10), priority: '0.2' },
    { loc: `${siteUrl}/cookies`, lastmod: new Date().toISOString().slice(0,10), priority: '0.2' },
    { loc: `${siteUrl}/disclaimer`, lastmod: new Date().toISOString().slice(0,10), priority: '0.2' },
    ...hubs.map(h => ({ loc: `${siteUrl}/hubs/${h.slug}`, lastmod: new Date().toISOString().slice(0,10), priority: '0.7' })),
    ...getGuides().map(g => ({ ...g, priority: '0.8' }))
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map(u => `  <url>
    <loc>${xmlEscape(u.loc)}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n') +
    `\n</urlset>\n`;

  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf8');
  console.log('✓ sitemap.xml generated');
}

generate();
