import { promises as fs } from 'fs';
import path from 'path';

const site = process.env.SITE_URL || 'https://www.wild-and-well.store';

const routes = [
  '/',
  '/about',
  '/guides',
  '/blog',
  '/recommended',
  '/deals',
  '/contact',
  '/privacy',
  '/terms',
  '/cookies',
  '/disclosure',
  '/search'
];

async function getGuideSlugs() {
  const contentDir = path.join(process.cwd(), 'content', 'guides');
  try {
    const files = await fs.readdir(contentDir);
    return files
      .filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
      .map(f => f.replace(/\.mdx?$/, ''));
  } catch {
    return [];
  }
}

function xmlUrl(loc, priority = '0.80') {
  return `<url><loc>${loc}</loc><changefreq>weekly</changefreq><priority>${priority}</priority></url>`;
}

async function run() {
  const guideSlugs = await getGuideSlugs();
  const guideUrls = guideSlugs.map(s => `${site}/guides/${s}`);

  const urls = [
    ...routes.map(r => `${site}${r}`),
    ...guideUrls
  ];

  const body = urls.map(u => xmlUrl(u)).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${body}
  </urlset>`;

  const pub = path.join(process.cwd(), 'public');
  await fs.mkdir(pub, { recursive: true });
  await fs.writeFile(path.join(pub, 'sitemap.xml'), xml, 'utf8');

  // robots.txt
  const robots = `User-agent: *
Allow: /

Sitemap: ${site}/sitemap.xml
`;
  await fs.writeFile(path.join(pub, 'robots.txt'), robots, 'utf8');

  console.log('✓ sitemap.xml and robots.txt generated');
}

run();
