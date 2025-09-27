// lib/content.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// -------- path helpers --------
function resolveBaseDir(dirName) {
  if (typeof dirName !== 'string') {
    throw new TypeError(`resolveBaseDir: "dirName" must be a string. Got ${typeof dirName}`);
  }

  // If absolute, use as-is
  if (path.isAbsolute(dirName)) return dirName;

  // Normalize & strip ./ or / and an optional leading "content/"
  const cleaned = dirName.replace(/^[./]+/, '').replace(/^content\//, '');

  // Final: /<repo>/content/<collection>
  return path.join(process.cwd(), 'content', cleaned);
}

function coerceDateToString(data) {
  // Ensure frontmatter "date" is JSON-serializable
  if (data && data.date instanceof Date) {
    return { ...data, date: data.date.toISOString() };
  }
  // If it's a string that parses to a valid date, leave it as string
  return data;
}

function listMdFiles(baseDir) {
  if (!fs.existsSync(baseDir)) return [];
  return fs
    .readdirSync(baseDir, { withFileTypes: true })
    .filter((d) => d.isFile() && /\.(md|mdx)$/i.test(d.name))
    .map((d) => d.name);
}

function filenameToSlug(filename) {
  return filename.replace(/\.(md|mdx)$/i, '');
}

function readFileIfExists(filePath) {
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : null;
}

// -------- core API --------
export function getAllSlugs(collection) {
  const baseDir = resolveBaseDir(collection);
  const files = listMdFiles(baseDir);
  return files.map(filenameToSlug);
}

export function getAllDocs(collection) {
  const baseDir = resolveBaseDir(collection);
  const files = listMdFiles(baseDir);

  const docs = files.map((file) => {
    const fullPath = path.join(baseDir, file);
    const raw = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(raw, { engines: { yaml: (s) => s } });
    const meta = coerceDateToString(data);
    return {
      slug: filenameToSlug(file),
      ...meta,
      content,
    };
  });

  // Sort by date desc if present
  return docs.sort((a, b) => {
    const ad = Date.parse(a.date || '');
    const bd = Date.parse(b.date || '');
    if (isNaN(ad) && isNaN(bd)) return 0;
    if (isNaN(ad)) return 1;
    if (isNaN(bd)) return -1;
    return bd - ad;
  });
}

export function getDocBySlug(collection, slug) {
  const baseDir = resolveBaseDir(collection);

  // Try both .md and .mdx (case-insensitive)
  const mdPath = path.join(baseDir, `${slug}.md`);
  const mdxPath = path.join(baseDir, `${slug}.mdx`);

  const raw = readFileIfExists(mdxPath) ?? readFileIfExists(mdPath);
  if (!raw) {
    const available = listMdFiles(baseDir).map(filenameToSlug);
    throw new Error(
      `getDocBySlug: not found "${slug}" in "${baseDir}". Available slugs: ${available.join(', ')}`
    );
  }

  const { data, content } = matter(raw, { engines: { yaml: (s) => s } });
  const meta = coerceDateToString(data);

  return {
    slug,
    ...meta,
    content,
  };
}

// If your pages expect HTML, we provide a light fallback that returns the raw markdown.
// You can replace this with a real markdown->HTML transform (remark/rehype) if you prefer.
export async function getDocWithHtml(collection, slug) {
  const doc = getDocBySlug(collection, slug);
  return {
    ...doc,
    html: doc.content, // Fallback: return markdown string; your page/component can render it.
  };
}

// Convenience to list docs with minimal fields for index pages
export function getAllDocsSummary(collection, fields = ['slug', 'title', 'date', 'excerpt']) {
  const docs = getAllDocs(collection);
  return docs.map((d) => {
    const out = {};
    fields.forEach((f) => {
      if (f in d) out[f] = d[f];
    });
    return out;
  });
}
