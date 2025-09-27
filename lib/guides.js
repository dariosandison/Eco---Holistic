// lib/content.js

// Directory where your guide files live: content/guides/*.md|*.mdx|*.json
const CONTENT_SUBDIR = ["content", "guides"];
const VALID_EXTS = [".md", ".mdx", ".json"];

let _cache = null; // simple build-time cache

async function pathJoin(...parts) {
  const path = await import("node:path");
  return parts.reduce((p, c) => path.default.join(p, c), "");
}

async function contentDir() {
  const path = await import("node:path");
  return path.default.join(process.cwd(), ...CONTENT_SUBDIR);
}

async function exists(filePath) {
  const fs = await import("node:fs/promises");
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function stripMarkdown(md) {
  return md
    // code blocks / inline code
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    // images and links
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/\[[^\]]*\]\([^)]+\)/g, " ")
    // headings / formatting
    .replace(/^[#>\-\*\s]+/gm, " ")
    .replace(/[*_~`]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function parseFrontmatter(raw) {
  // crude YAML frontmatter parser (no deps)
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  let meta = {};
  let body = raw;

  if (m) {
    const yaml = m[1];
    body = m[2] || "";
    yaml.split("\n").forEach((line) => {
      const mm = line.match(/^\s*([A-Za-z0-9_-]+)\s*:\s*["']?(.+?)["']?\s*$/);
      if (mm) meta[mm[1]] = mm[2];
    });
  }

  // fallback title from first H1
  const h1 = body.match(/(?:^|\n)#\s+(.+)\n/);
  if (!meta.title && h1) meta.title = h1[1].trim();

  return { meta, body };
}

async function readOneFile(fullPath, slug) {
  const fs = await import("node:fs/promises");
  const path = await import("node:path");
  const ext = path.default.extname(fullPath).toLowerCase();

  const raw = await fs.readFile(fullPath, "utf8");

  if (ext === ".json") {
    const json = JSON.parse(raw);
    const title = json.title || slug.replace(/-/g, " ");
    const body = (json.content || "").toString();
    const excerpt =
      json.excerpt ||
      stripMarkdown(body).slice(0, 180) + (body.length > 180 ? "…" : "");
    return {
      slug,
      title,
      excerpt,
      date: json.date || null,
      cover: json.cover || null,
      content: body,
      meta: json,
    };
  }

  const { meta, body } = parseFrontmatter(raw);
  const title = meta.title || slug.replace(/-/g, " ");
  const excerpt =
    meta.excerpt ||
    meta.description ||
    stripMarkdown(body).slice(0, 180) + (body.length > 180 ? "…" : "");
  return {
    slug,
    title,
    excerpt,
    date: meta.date || null,
    cover: meta.cover || null,
    content: body,
    meta,
  };
}

async function scanDocs() {
  if (_cache) return _cache;

  const fs = await import("node:fs/promises");
  const path = await import("node:path");
  const dir = await contentDir();

  let entries = [];
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    // folder may not exist; return empty
    _cache = { list: [], bySlug: new Map() };
    return _cache;
  }

  const files = entries
    .filter((d) => d.isFile())
    .map((d) => d.name)
    .filter((name) => VALID_EXTS.includes(path.default.extname(name).toLowerCase()));

  const list = [];
  const bySlug = new Map();

  for (const name of files) {
    const slug = name.replace(/\.(md|mdx|json)$/i, "");
    const full = path.default.join(dir, name);
    try {
      const doc = await readOneFile(full, slug);
      list.push(doc);
      bySlug.set(slug, doc);
    } catch {
      // ignore unreadable file
    }
  }

  // sort by date desc, then title
  list.sort((a, b) => {
    const da = a.date ? Date.parse(a.date) : 0;
    const db = b.date ? Date.parse(b.date) : 0;
    if (db !== da) return db - da;
    return a.title.localeCompare(b.title);
  });

  _cache = { list, bySlug };
  return _cache;
}

// ====== Exports used across the app ======

/** Returns [{ slug, title, excerpt, date, cover }] */
export async function getAllDocs() {
  const { list } = await scanDocs();
  // return a light-weight view
  return list.map(({ slug, title, excerpt, date, cover }) => ({
    slug,
    title,
    excerpt,
    date,
    cover,
  }));
}

/** Returns ["my-guide", ...] */
export async function getAllGuideSlugs() {
  const { list } = await scanDocs();
  return list.map((d) => d.slug);
}

/** Returns { content, meta } for a given slug */
export async function readGuideFile(slug) {
  const { bySlug } = await scanDocs();
  const doc = bySlug.get(slug);
  if (!doc) throw new Error(`Guide not found: ${slug}`);
  const { content, meta } = doc;
  return { content, meta };
}
