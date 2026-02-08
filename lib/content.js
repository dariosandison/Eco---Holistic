import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

function normaliseItem({ slug, data }) {
  const description = data.description || data.excerpt || data.summary || '';
  const type = data.type || (Array.isArray(data.tags) && data.tags.includes('guide') ? 'Explainer' : 'Insight');
  return { slug, ...data, description, type };
}

export function listContent(kind = 'blog') {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const items = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx') && !f.endsWith('-duplicate.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
      const { data } = matter(raw);
      return normaliseItem({ slug, data });
    })
    // Hide items from list/index pages while keeping them accessible by direct URL.
    .filter((i) => !(i.hidden === true || i.draft === true))
    .sort((a, b) => new Date(b.updated || b.date || 0) - new Date(a.updated || a.date || 0));

  if (kind === 'guides' || kind === 'explainers') return items.filter((i) => (i.type || '').toLowerCase() === 'explainer');
  if (kind === 'insights') return items.filter((i) => (i.type || '').toLowerCase() !== 'explainer');
  return items;
}

export function getContent(kind, slug) {
  // Guides/explainers now live in /content/blog as well.
  const file = path.join(BLOG_DIR, slug + '.mdx');
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  const item = normaliseItem({ slug, data });
  return { frontmatter: item, content };
}

export function tocFromMarkdown(md) {
  const lines = md.split('\n');
  const items = [];
  for (const line of lines) {
    const m = /^(#{2,3})\s+(.*)/.exec(line.trim());
    if (m) {
      const level = m[1].length;
      const text = m[2].replace(/[*_`~]/g, '');
      const slug = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
      items.push({ slug, text, level });
    }
  }
  return items;
}
