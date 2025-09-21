import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import slugify from 'slugify';

const GUIDES_DIR = path.join(process.cwd(), 'content', 'guides');

export function getGuideSlugs() {
  if (!fs.existsSync(GUIDES_DIR)) return [];
  return fs
    .readdirSync(GUIDES_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export function getGuideBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(GUIDES_DIR, `${realSlug}.md`);
  const file = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(file);

  const date = data.date
    ? typeof data.date === 'string'
      ? data.date
      : new Date(data.date).toISOString()
    : null;

  return {
    slug: realSlug,
    title: data.title || toTitle(realSlug),
    excerpt: data.excerpt || data.summary || '',
    date,
    cover: data.cover || '',
    category: data.category || '',
    featured: !!data.featured,
    author: data.author || 'Wild & Well',
    content
  };
}

export async function getAllGuides() {
  const slugs = getGuideSlugs();
  const items = slugs.map((slug) => getGuideBySlug(slug));
  items.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  return items;
}

function toTitle(s) {
  return slugify(s, { lower: false, strict: true })
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
