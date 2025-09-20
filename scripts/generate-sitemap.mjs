import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const SITE = 'https://www.wild-and-well.store';
const outDir = path.join(process.cwd(), 'public');
const guidesDir = path.join(process.cwd(), 'content', 'guides');

function getGuides() {
  if (!fs.existsSync(guidesDir)) return [];
  return fs.readdirSync(guidesDir)
    .filter(f => f.endsWith('.md'))
    .map(f => {
      const raw = fs.readFileSync(path.join(guidesDir, f), 'utf8');
      const { data } = matter(raw);
      const slug = (data.slug || f.replace(/\.md$/,'')).trim();
      return { slug, date: data.date || null };
    });
}

function url(loc, lastmod) {
  return `
  <url>
    <loc>${loc}</loc>
    ${lastmod ? `<lastmod>${new Date(lastmod).toISOString()}</lastmod>` : ''}
    <changefreq>weekly</changefreq>
    <priority>${loc === SITE ? '1.0' : '0.7'}</priority>
  </url>`;
}

const staticPaths = ['/', '/guides', '/recommended', '/deals', '/disclosure', '/privacy', '/cookies']
  .map(p => ({ loc: SITE + p }));

const guidePaths = getGuides().map(g => ({ loc: `${SITE}/guides/${g.slug}`, lastmod: g.date }));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticPaths, ...guidePaths].map(u => url(u.loc, u.lastmod)).join('\n')}
</urlset>`;

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml.trim());
console.log('✅ sitemap.xml generated');
