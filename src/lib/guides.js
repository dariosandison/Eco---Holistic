// src/lib/guides.js
// ESM-safe, JSON-serializable helpers for Guides

import path from "path";

// Helpers
const GUIDE_DIR = path.join(process.cwd(), "content", "guides");

const toISODate = (val) => {
  if (!val) return null;
  const d = val instanceof Date ? val : new Date(val);
  if (Number.isNaN(d.getTime())) return null;
  // return "YYYY-MM-DD"
  return d.toISOString().slice(0, 10);
};

const cleanString = (v) =>
  typeof v === "string" && v.trim().length ? v.trim() : null;

const cleanArray = (v) => (Array.isArray(v) ? v.filter(Boolean) : []);

const slugFromFilename = (name) =>
  name
    .replace(/\.mdx?$/i, "")
    .replace(/[^a-z0-9-]+/gi, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();

const excerptFrom = (content) => {
  if (!content) return null;
  const s = content.replace(/\r?\n+/g, " ").trim();
  return s.length > 180 ? s.slice(0, 177) + "..." : s || null;
};

const readTime = (text) => {
  if (!text) return 0;
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200)); // ~200 wpm
};

// ---- Core readers (fs is imported dynamically to avoid bundling on client) ----
async function listGuideFiles() {
  const { readdir } = await import("node:fs/promises");
  const files = await readdir(GUIDE_DIR).catch(() => []);
  return files.filter((f) => /\.mdx?$/i.test(f));
}

async function readFile(fullPath) {
  const { readFile } = await import("node:fs/promises");
  return readFile(fullPath, "utf8");
}

// ---- Public API ----

// Lightweight list of metadata for all guides (JSON-safe)
export async function getAllGuidesMeta() {
  const files = await listGuideFiles();

  // gray-matter loaded only on server at build time
  const matter = (await import("gray-matter")).default;

  const items = await Promise.all(
    files.map(async (file) => {
      const slug = slugFromFilename(file);
      const fullPath = path.join(GUIDE_DIR, file);
      const raw = await readFile(fullPath);
      const parsed = matter(raw);
      const data = parsed.data || {};

      const meta = {
        slug,
        title: cleanString(data.title) || slug.replace(/-/g, " "),
        description: cleanString(data.description) || excerptFrom(parsed.content),
        excerpt: cleanString(data.excerpt) || excerptFrom(parsed.content),
        image: cleanString(data.image),
        tags: cleanArray(data.tags),
        // JSON-safe dates
        date: toISODate(data.date),
        updated: toISODate(data.updated),
        draft: data.draft === true || data.status === "draft" ? true : false,
        readTime: readTime(parsed.content),
      };

      // Ensure no undefined values sneak in
      Object.keys(meta).forEach((k) => {
        if (typeof meta[k] === "undefined") meta[k] = null;
      });

      return meta;
    })
  );

  // Sort by updated desc, then date desc
  return items
    .sort((a, b) => {
      const aKey = a.updated || a.date || "1970-01-01";
      const bKey = b.updated || b.date || "1970-01-01";
      return aKey < bKey ? 1 : aKey > bKey ? -1 : 0;
    })
    .filter((g) => !g.draft); // hide drafts by default
}

// Compat alias some pages may still import
export async function getAllGuides() {
  return getAllGuidesMeta();
}

export async function getAllGuidesSlugs() {
  const metas = await getAllGuidesMeta();
  return metas.map((m) => m.slug);
}

// Full guide (HTML + meta), all JSON-safe
export async function getGuideBySlug(slug) {
  const files = await listGuideFiles();
  const file = files.find((f) => slugFromFilename(f) === slug);
  if (!file) return null;

  const fullPath = path.join(GUIDE_DIR, file);
  const raw = await readFile(fullPath);

  const matter = (await import("gray-matter")).default;
  const parsed = matter(raw);
  const data = parsed.data || {};

  // Convert MD/MDX -> HTML (remark works fine for .md too)
  const { remark } = await import("remark");
  const html = (await import("remark-html")).default;
  const processed = await remark().use(html).process(parsed.content || "");
  const contentHtml = String(processed);

  const meta = {
    slug,
    title: cleanString(data.title) || slug.replace(/-/g, " "),
    description: cleanString(data.description) || excerptFrom(parsed.content),
    excerpt: cleanString(data.excerpt) || excerptFrom(parsed.content),
    image: cleanString(data.image),
    tags: cleanArray(data.tags),
    date: toISODate(data.date),
    updated: toISODate(data.updated),
    draft: data.draft === true || data.status === "draft" ? true : false,
    readTime: readTime(parsed.content),
  };
  Object.keys(meta).forEach((k) => {
    if (typeof meta[k] === "undefined") meta[k] = null;
  });

  return { meta, html: contentHtml };
}
