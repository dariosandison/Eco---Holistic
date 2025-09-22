import { promises as fs } from 'fs';
import path from 'path';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store';
const staticRoutes = [
  '/', '/guides', '/about', '/contact',
  '/disclosure', '/privacy', '/terms', '/recommended', '/search', '/cookies', '/deals'
];

async function getGuideSlugs() {
  try {
    const dir = path.join(process.cwd(), 'content', 'guides');
    const entries = await fs.readdir(dir);
    return entries.filter(f => f.endsWith('.md')).map(f => f.replace(/\.md$/, ''));
  } catch {
    return [];
  }
}

async function run() {
  const slugs = await getGuideSlugs();
  const urls = [
    ...staticRoutes.map(r => `${SITE}${r}`),
    ...slugs.map(s => `${SITE}/guides/${s}`)
  ];
  const now = new Date().toISOString();
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map(u => `  <url><loc>${u}</loc><lastmod>${now}</lastmod><changefreq>weekly</changefreq></url>`).join('\n') +
    `\n</urlset>`;

  await fs.mkdir('public', { recursive: true });
  await fs.writeFile('public/sitemap.xml', xml, 'utf8');
  await fs.writeFile('public/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`, 'utf8');
  console.log('Sitemap and robots.txt generated.');
}
run();
