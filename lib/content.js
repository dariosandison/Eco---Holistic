// lib/content.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// ---------- utils ----------
function normalizeDirArg(arg, fallback = '') {
  // Accept "guides" or { dir: "guides" }
  if (typeof arg === 'string') return arg;
  if (arg && typeof arg === 'object') {
    if (typeof arg.dir === 'string') return arg.dir;
  }
  if (fallback) return fallback;
  throw new Error(
    `Expected a directory string or { dir: string } but received: ${JSON.stringify(arg)}`
  );
}

function resolveBaseDir(dirName) {
  // dirName must be a string here
  if (typeof dirName !== 'string') {
    throw new TypeError(`resolveBaseDir: "dirName" must be a string. Got ${typeof dirName}`);
  }
  // Your content lives at "<repo>/content/<dirName>"
  return path.join(process.cwd(), 'content', dirName);
}

function readDirRecursive(base) {
  const out = [];
  for (const entry of fs.readdirSync(base, { withFileTypes: true })) {
    const full = path.join(base, entry.name);
    if (entry.isDirectory()) {
      out.push(...readDirRecursive(full));
    } else if (/\.(md|mdx)$/i.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function safeIsoDate(input) {
  // Keep strings as-is if they look like dates; convert Date objects to ISO
  if (!input) return null;
  if (typeof input === 'string') return input;
  if (input instanceof Date && !isNaN(input)) return input.toISOString();
  // Sometimes frontmatter dates are numbers (timestamps) — convert those too.
  if (typeof input === 'number') {
    const d = new Date(input);
    return isNaN(d) ? null : d.toISOString();
  }
  return null;
}

// ---------- exports ----------
export function getAllSlugs(dirArg) {
  const dir = normalizeDirArg(dirArg);
  const baseDir = resolveBaseDir(dir);
  const files = readDirRecursive(baseDir);
  // Return *plain string* slugs only (no objects)
  return files.map((fp) => path.basename(fp).replace(/\.(md|mdx)$/i, ''));
}

export function getDocBySlug(dirArg, slug) {
  const dir = normalizeDirArg(dirArg);
  const baseDir = resolveBaseDir(dir);

  if (!slug || typeof slug !== 'string') {
    throw new Error(`getDocBySlug: "slug" must be a non-empty string. Got: ${slug}`);
  }

  // Find .md or .mdx
  const mdPath = path.join(baseDir, `${slug}.md`);
  const mdxPath = path.join(baseDir, `${slug}.mdx`);
  const fullPath = fs.existsSync(mdxPath) ? mdxPath : mdPath;

  if (!fs.existsSync(fullPath)) {
    throw new Error(`getDocBySlug: file not found for slug "${slug}" in dir "${dir}"`);
  }

  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data: frontmatter, content } = matter(raw);

  // Make frontmatter JSON-serializable
  const fm = { ...frontmatter };
  if ('date' in fm) fm.date = safeIsoDate(fm.date);

  return {
    slug,
    frontmatter: fm,
    content,
  };
}

export async function getDocWithHtml(dirArg, slug) {
  const doc = getDocBySlug(dirArg, slug);
  const processed = await remark().use(html).process(doc.content || '');
  const contentHtml = processed.toString();
  return { ...doc, contentHtml };
}

// Convenience for pages that need all docs (e.g., building lists)
export function getAllDocs(dirArg) {
  const dir = normalizeDirArg(dirArg);
  return getAllSlugs(dir).map((slug) => getDocBySlug(dir, slug));
}
