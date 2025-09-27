// lib/content.js
import fs from 'fs';
import path from 'path';

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
 * Minimal front-matter parser (no external deps).
 * Supports simple "key: value" lines. Values can be quoted or plain.
 * Everything after the closing --- is returned as `content`.
 */
function parseFrontMatter(src) {
  const fmMatch = src.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!fmMatch) return { data: {}, content: src };

  const [, rawMeta, content] = fmMatch;
  const data = {};
  for (const rawLine of rawMeta.split('\n')) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();

    // strip surrounding quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }
  return { data, content };
}

/**
 * getAllDocs({ dir, fields })
 * Reads all docs in a directory and returns selected fields, sorted by date (desc if available).
 * fields can include: 'slug', 'title', 'date', 'excerpt', 'content', or any front-matter key.
 */
export function getAllDocs({ dir = 'content/guides', fields = [] } = {}) {
  const files = readMarkdownFiles(dir);

  const items = files.map((filename) => {
    const slug = filenameToSlug(filename);
    const fullPath = path.join(ROOT, dir, filename);
    const file = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = parseFrontMatter(file);

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

  if (!fullPath) return null;

  const file = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = parseFrontMatter(file);

  const entry = { slug };
  for (const field of fields) {
    if (field === 'slug') entry.slug = slug;
    else if (field === 'content') entry.content = content;
    else if (data && Object.prototype.hasOwnProperty.call(data, field)) entry[field] = data[field];
  }

  return entry;
}
