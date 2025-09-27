import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const ROOT = process.cwd();

function readDirSafe(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
}

/**
 * getAllDocs({ dir, fields })
 * - dir: relative to project root (default "content/guides")
 * - fields: array of fields to return, e.g. ['title','date','excerpt','slug','content']
 */
export function getAllDocs({ dir = 'content/guides', fields = [] } = {}) {
  const folder = path.join(ROOT, dir);
  const files = readDirSafe(folder);

  const items = files.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, '');
    const fullPath = path.join(folder, filename);
    const file = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(file);

    const entry = { slug };
    for (const field of fields) {
      if (field === 'slug') entry.slug = slug;
      else if (field === 'content') entry.content = content;
      else if (data && data[field] !== undefined) entry[field] = data[field];
    }
    return entry;
  });

  // sort by date desc if present
  items.sort((a, b) => {
    const da = new Date(a.date || 0).getTime();
    const db = new Date(b.date || 0).getTime();
    return db - da;
  });

  return items;
}
