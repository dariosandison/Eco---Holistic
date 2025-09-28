// scripts/generate-sitemap.mjs
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import hubs from '../data/hubs.js';

const siteUrl = 'https://www.wild-and-well.store';
const publicDir = path.join(process.cwd(), 'public');

function collect(dir, basePath) {
  const full = path.join(process.cwd(), dir);
  if (!fs.existsSync(full)) return [];
  const files = fs.readdirSync(full).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
  return files.map(f => {
    const slug = f.replace(/\.(md|mdx)$/,'');
    const raw = fs.readFileSync(path.join(full, f), 'utf8');
    const { data } = matter(raw);
    const lastmod = data.updated || data.date || new Date().toISOString().slice(0,10);
    return { loc: `${siteUrl}${basePath}/${slug}`, lastmod };
  });
}

function xmlEscape(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function generate() {
  const today = new Date().toISOString().slice(0,10);

  const urls = [
    { loc: `${siteUrl}/`, lastmod: today, priority: '1.0' },
    { loc: `${siteUrl}/guides`, lastmod: today, priority: '0.9' },
    { loc: `${siteUrl}/reviews`, lastmod: today, priority: '0.9' },
    { loc: `${siteUrl}/deals`, lastmod: today, priority: '0.6' },
    { loc: `${siteUrl}/search`, lastmod: today, priority: '0.3' },
    // Legal
    { loc: `${siteUrl}/legal/affiliate-disclosure`, lastmod: today, priority: '0.2' },
    { loc: `${siteUrl}/legal/product-disclosure`, lastmod: today, priority: '0.2' },
    { loc: `${siteUrl}/legal/cookies`, lastmod: today, priority: '0.2' },
    { loc: `${siteUrl}/legal/disclaimer`, lastmod: today, priority: '0.2' },
    // Hubs
    ...hubs.map(h => ({ loc: `${siteUrl}/hubs/${h.slug}`, lastmod: today, priority: '0.7' })),
    // Guides
    ...collect('content/guides','/guides').map(g => ({ ...g, priority: '0.8' })),
    // Reviews
    ...collect('content/reviews','/reviews').map(g => ({ ...g, priority: '0.85' })),
    // Compare
    ...collect('content/compare','/compare').map(g => ({ ...g, priority: '0.7' }))
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
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
