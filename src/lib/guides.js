import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const GUIDES_DIR = path.join(process.cwd(), 'content', 'guides');

function listMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => f.toLowerCase().endsWith('.md'));
}

export function getAllGuidesMeta() {
  const files = listMarkdownFiles(GUIDES_DIR);
  const guides = files.map(filename => {
    const slug = filename.replace(/\.md$/i, '');
    const raw = fs.readFileSync(path.join(GUIDES_DIR, filename), 'utf8');
    const { data } = matter(raw);

    const meta = {
      slug,
      title: String(data.title || slug),
      summary: String(data.summary || ''),
      date: data.date ? String(data.date) : '',
      image: data.image ? String(data.image) : '',
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      readTime: data.readTime ? String(data.readTime) : ''
    };

    const sortKey = meta.date ? Date.parse(meta.date) || 0 : 0;
    return { ...meta, _sort: sortKey };
  });

  guides.sort((a, b) => b._sort - a._sort);
  return guides.map(({ _sort, ...g }) => g);
}

export function getGuideBySlug(slug) {
  const fullPath = path.join(GUIDES_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(raw);

  const meta = {
    slug,
    title: String(data.title || slug),
    summary: String(data.summary || ''),
    date: data.date ? String(data.date) : '',
    image: data.image ? String(data.image) : '',
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    readTime: data.readTime ? String(data.readTime) : ''
  };

  return { meta, content };
}
