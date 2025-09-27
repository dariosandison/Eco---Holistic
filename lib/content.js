// lib/content.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function readDirRecursive(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const p = path.join(dirPath, e.name);
    if (e.isDirectory()) files.push(...readDirRecursive(p));
    else if (e.isFile() && /\.mdx?$/.test(e.name)) files.push(p);
  }
  return files;
}

// options: { dir, fields: ['title','excerpt','date','image'] }
export function getAllDocs({ dir, fields = [] }) {
  const baseDir = path.join(process.cwd(), dir);
  if (!fs.existsSync(baseDir)) return [];

  const filePaths = readDirRecursive(baseDir);
  const docs = filePaths.map((fp) => {
    const slug = fp
      .replace(baseDir + path.sep, '')
      .replace(/\\/g, '/')
      .replace(/\.mdx?$/, '');

    const file = fs.readFileSync(fp, 'utf8');
    const { data, content } = matter(file);

    const item = { slug };
    fields.forEach((f) => {
      if (f === 'content') item.content = content;
      else if (f === 'date') {
        const d = data.date ? new Date(data.date) : null;
        item.date = d ? d.toISOString() : null; // <-- serialize
      } else {
        item[f] = data?.[f] ?? null;
      }
    });
    return item;
  });

  // Sort by date desc if provided
  return docs.sort((a, b) => {
    const ad = a.date ? Date.parse(a.date) : 0;
    const bd = b.date ? Date.parse(b.date) : 0;
    return bd - ad;
  });
}
