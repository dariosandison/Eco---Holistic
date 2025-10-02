// lib/content.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// ---------- helpers ----------
function extractDir(input) {
  // Accept: "blog" | "guides" | "content/blog" | { dir, collection, path, baseDir, root }
  if (typeof input === 'string') return input;

  if (input && typeof input === 'object') {
    const candidate =
      input.dir ??
      input.collection ??
      input.path ??
      input.baseDir ??
      input.base ??
      null;

    if (typeof candidate !== 'string') {
      throw new TypeError(
        `resolveBaseDir: "dirName" must be a string or an object with a string property (dir|collection|path|baseDir). Got ${JSON.stringify(
          input
        )}`
      );
    }

    // Optional "root" (e.g., "content") — we'll fold it in if present.
    if (typeof input.root === 'string' && input.root.length) {
      return path.join(input.root, candidate);
    }
    return candidate;
  }

  throw new TypeError(
    `resolveBaseDir: "dirName" must be a string or object. Got ${typeof input}`
  );
}

function resolveBaseDir(dirNameOrOpts) {
  let dirName = extractDir(dirNameOrOpts);

  // Absolute path -> use as-is
  if (path.isAbsolute(dirName)) return dirName;

  // Normalize: strip leading ./ or /
  let cleaned = dirName.replace(/^[./]+/, '');

  // If caller already included "content/", strip it to avoid "content/content/*"
  cleaned = cleaned.replace(/^content\//, '');

  // Final path inside repo
  return path.join(process.cwd(), 'content', cleaned);
}

function coerceDateToString(data) {
  if (!data) return data;
  const out = { ...data };

  // frontmatter date as ISO string
  if (out.date instanceof Date) {
    out.date = out.date.toISOString();
  } else if (typeof out.date === 'string') {
    // leave as string (Next can serialize)
  }
  return out;
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

// ---------- public API ----------
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

  // Try .mdx then .md
  const mdxPath = path.join(baseDir, `${slug}.mdx`);
  const mdPath = path.join(baseDir, `${slug}.md`);

  const raw = readFileIfExists(mdxPath) ?? readFileIfExists(mdPath);
  if (!raw) {
    const available = listMdFiles(baseDir).map(filenameToSlug);
    throw new Error(
      `getDocBySlug: not found "${slug}" in "${baseDir}". Available slugs: ${available.join(
        ', '
      )}`
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

export async function getDocWithHtml(collection, slug) {
  const doc = getDocBySlug(collection, slug);
  // Leave markdown as-is in 'html' for now (component decides how to render)
  return {
    ...doc,
    html: doc.content,
  };
}

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
