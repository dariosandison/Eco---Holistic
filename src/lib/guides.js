import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import slugify from 'slugify';

const guidesDir = path.join(process.cwd(), 'content', 'guides');

function toDateString(v) {
  if (!v) return '';
  // Accept ISO string, number, or Date; always return ISO-ish string
  try {
    const d = new Date(v);
    return isNaN(d.getTime()) ? String(v) : d.toISOString();
  } catch {
    return String(v);
  }
}

function sortByDateDesc(a, b) {
  const at = new Date(a.date || 0).getTime() || 0;
  const bt = new Date(b.date || 0).getTime() || 0;
  return bt - at;
}

export async function getAllGuides() {
  let files = [];
  try {
    files = await fs.readdir(guidesDir);
  } catch {
    return [];
  }

  const items = await Promise.all(
    files
      .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
      .map(async (file) => {
        const raw = await fs.readFile(path.join(guidesDir, file), 'utf8');
        const { data, content } = matter(raw);

        // Derive slug from filename if not provided
        const base = file.replace(/\.mdx?$/, '');
        const slug = data.slug || slugify(base, { lower: true, strict: true });

        return {
          slug,
          title: data.title || base,
          excerpt: data.excerpt || '',
          date: toDateString(data.date),
          cover: data.cover || '',
          category: data.category || '',
          author: data.author || 'Wild & Well',
          _content: content // keep for later if needed
        };
      })
  );

  // sort newest first
  items.sort(sortByDateDesc);

  // strip private fields
  return items.map(({ _content, ...meta }) => meta);
}

export async function getGuideBySlug(slug) {
  // Try both .md and .mdx
  const mdPath = path.join(guidesDir, `${slug}.md`);
  const mdxPath = path.join(guidesDir, `${slug}.mdx`);
  let raw;

  try {
    raw = await fs.readFile(mdPath, 'utf8');
  } catch {
    raw = await fs.readFile(mdxPath, 'utf8');
  }

  const { data, content } = matter(raw);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title: data.title || slug,
    excerpt: data.excerpt || '',
    date: toDateString(data.date),
    cover: data.cover || '',
    category: data.category || '',
    author: data.author || 'Wild & Well',
    contentHtml
  };
}
