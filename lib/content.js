// lib/content.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const ROOT = process.cwd();

/** Return ".md" and ".mdx" filenames from a folder (or empty if missing) */
function readMarkdownFiles(dir) {
  const folder = path.join(ROOT, dir);
  if (!fs.existsSync(folder)) return [];
  return fs.readdirSync(folder).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
}

/** Convert a filename to a slug by stripping the extension */
function filenameToSlug(filename) {
  return filename.replace(/\.mdx?$/, '');
}

/**
 * getAllDocs({ dir, fields })
 * Reads all docs in a directory and returns selected fields, sorted by date (desc if available).
 * fields can include: 'slug', 'title', 'date', 'excerpt', 'content', or any frontmatter key.
 */
export function getAllDocs({ dir = 'content/guides', fields = [] } = {}) {
  const files = readMarkdownFiles(dir);

  const items = files.map((filename) => {
    const slug = filenameToSlug(filename);
    const fullPath = path.join(ROOT, dir, filename);
    const file = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(file);

    const entry = { slug };
    for (const field of fields) {
      if (field === 'slug') entry.slug = slug;
      else if (field === 'content') entry.content = content;
      else if (data && Object.prototype.hasOwnProperty.call(data, field)) entry[field] = data[field];
    }
    return entry;
  });

  items.sort((a, b) => {
    const da = new Date(a.date || 0).getTime();
    const db = new Date(b.date || 0).getTime();
    return db - da;
  });

  return items;
}

/** Get all slugs in a directory (no extension) */
export function getAllSlugs({ dir = 'content/guides' } = {}) {
  return readMarkdownFiles(dir).map(filenameToSlug);
}

/**
 * getDocBySlug({ dir, slug, fields })
 * Reads a single doc by slug and returns selected fields.
 */
export function getDocBySlug({ dir = 'content/guides', slug, fields = [] }) {
  const candidates = [`${slug}.md`, `${slug}.mdx`];
  const fullPath = candidates
    .map((name) => path.join(ROOT, dir, name))
    .find((p) => fs.existsSync(p));

  if (!fullPath) {
    return null;
  }

  const file = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(file);

  const entry = { slug };
  for (const field of fields) {
    if (field === 'slug') entry.slug = slug;
    else if (field === 'content') entry.content = content;
    else if (data && Object.prototype.hasOwnProperty.call(data, field)) entry[field] = data[field];
  }

  return entry;
}
