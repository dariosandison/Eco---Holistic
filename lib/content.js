// lib/content.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/**
 * Resolve a base directory for content.
 * Accepts either "content/blog" or just "blog" (will try both).
 */
function resolveBaseDir(dir) {
  const cwd = process.cwd();
  const candidates = [
    path.isAbsolute(dir) ? dir : path.join(cwd, dir),
    path.join(cwd, 'content', dir),
    path.join(cwd, 'content'), // final fallback for single-bucket repos
  ];
  for (const p of candidates) {
    if (fs.existsSync(p) && fs.statSync(p).isDirectory()) return p;
  }
  // If nothing exists, still return cwd to avoid crashes; callers will see empty sets
  return path.join(cwd, dir);
}

function readDirRecursive(dirPath) {
  if (!fs.existsSync(dirPath)) return [];
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const p = path.join(dirPath, e.name);
    if (e.isDirectory()) files.push(...readDirRecursive(p));
    else if (e.isFile() && /\.(md|mdx)$/i.test(e.name)) files.push(p);
  }
  return files;
}

function toIsoDate(v) {
  try {
    if (!v) return null;
    const d = new Date(v);
    return Number.isNaN(d.getTime()) ? null : d.toISOString();
  } catch {
    return null;
  }
}

/**
 * Core loader for a single file path.
 */
function loadFile(fp, requestedFields = []) {
  const file = fs.readFileSync(fp, 'utf8');
  const { data, content } = matter(file);

  const result = {};
  const fields = requestedFields.length ? requestedFields : Object.keys(data);

  for (const f of fields) {
    if (f === 'content') {
      result.content = content;
      continue;
    }
    if (f === 'date') {
      result.date = toIsoDate(data?.date);
      continue;
    }
    result[f] = data?.[f] ?? null;
  }
  return { fm: data, content, result };
}

/**
 * Public: getAllDocs
 * options: { dir, fields: ['title','excerpt','date','image','content'] }
 */
export function getAllDocs({ dir, fields = [] }) {
  const baseDir = resolveBaseDir(dir);
  const files = readDirRecursive(baseDir);

  const docs = files.map((fp) => {
    const slug = path.basename(fp).replace(/\.(md|mdx)$/i, '');
    const { result } = loadFile(fp, fields);
    return { slug, ...result };
  });

  // Sort desc by date if present
  docs.sort((a, b) => {
    const ad = a.date ? Date.parse(a.date) : 0;
    const bd = b.date ? Date.parse(b.date) : 0;
    return bd - ad;
  });

  return docs;
}

/**
 * Public: getDocBySlug
 * args: { dir, slug, fields }
 */
export function getDocBySlug({ dir, slug, fields = [] }) {
  const baseDir = resolveBaseDir(dir);
  // Try both .mdx and .md
  const candidates = [
    path.join(baseDir, `${slug}.mdx`),
    path.join(baseDir, `${slug}.md`),
  ];
  const fp = candidates.find((p) => fs.existsSync(p));
  if (!fp) return null;

  const { result } = loadFile(fp, fields);
  return { slug, ...result };
}

/**
 * Public: getAllSlugs
 * returns: [{ params: { slug: 'string' }}]
 * Guaranteed to be strings (fixes Next's slug type error).
 */
// lib/content.js — replace the whole getAllSlugs function with this
export function getAllSlugs(dir) {
  const baseDir = resolveBaseDir(dir);
  const files = readDirRecursive(baseDir);
  return files.map((fp) =>
    path.basename(fp).replace(/\.(md|mdx)$/i, '')
  ); // <-- plain "slug" strings
}

/**
 * Public: getDocWithHtml
 * args: { dir, slug, fields }
 * If remark/remark-html are unavailable, falls back to raw content.
 */
export async function getDocWithHtml({ dir, slug, fields = [] }) {
  const doc = getDocBySlug({ dir, slug, fields: Array.from(new Set([...fields, 'content', 'date'])) });
  if (!doc) return null;

  let contentHtml = doc.content || '';
  try {
    // Lazy import to avoid hard dependency
    const { remark } = await import('remark');
    const html = await import('remark-html').then((m) => m.default || m);
    const processed = await remark().use(html).process(doc.content || '');
    contentHtml = String(processed);
  } catch {
    // remark not installed; keep plain content
    contentHtml = doc.content || '';
  }

  // Strip raw content if caller didn't ask for it, but always include safe HTML
  const out = { ...doc, contentHtml };
  if (!fields.includes('content')) delete out.content;

  // Ensure date stays serialized
  if (out.date) out.date = toIsoDate(out.date);

  return out;
}
