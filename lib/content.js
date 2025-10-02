// lib/content.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ROOT = process.cwd();
const DIRS = {
  guides: path.join(ROOT, "content", "guides"),
  blog: path.join(ROOT, "content", "blog"),
  deals: path.join(ROOT, "content", "deals"),
};

function safeRead(filePath) {
  try { return fs.readFileSync(filePath, "utf8"); } catch { return ""; }
}
function existsDir(dir) {
  try { return fs.existsSync(dir) && fs.statSync(dir).isDirectory(); } catch { return false; }
}
function toTitle(slug) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, s => s.toUpperCase());
}
function excerptFrom(content, words = 28) {
  const text = content
    .replace(/<[^>]+>/g, " ")
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, " ")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]+`/g, " ")
    .replace(/\[[^\]]*\]\([^)]+\)/g, " "); // strip links
  const arr = text.split(/\s+/).filter(Boolean).slice(0, words);
  return arr.join(" ") + (arr.length >= words ? "…" : "");
}
function toDateString(val) {
  if (!val) return null;
  // Gray-matter may give Date objects; Next.js can't serialize them.
  if (val instanceof Date && !isNaN(val)) return val.toISOString();
  if (typeof val === "string") {
    const d = new Date(val);
    if (!isNaN(d)) return d.toISOString();
    return val; // leave as-is if it's some custom string
  }
  // Fallback: attempt to stringify safely
  try {
    const d = new Date(val);
    if (!isNaN(d)) return d.toISOString();
  } catch {}
  return null;
}
function ts(x) {
  return x ? Date.parse(x) || 0 : 0;
}

function parseOne(dir, filename, type) {
  const slug = filename.replace(/\.mdx?$/i, "");
  const full = path.join(dir, filename);
  const raw = safeRead(full);
  const { data = {}, content = "" } = matter(raw);

  const title = data.title || toTitle(slug);
  const description = data.description || excerptFrom(content, 28);
  const date = toDateString(data.date || data.updated || null);
  const cover = data.image || data.cover || data.hero || null;

  let tags = [];
  if (Array.isArray(data.tags)) {
    tags = data.tags;
  } else if (typeof data.tags === "string") {
    tags = data.tags.split(/[|,]/).map(s => s.trim()).filter(Boolean);
  }

  return { type, slug, title, description, date, cover, tags };
}

function readCollection(dir, type) {
  if (!existsDir(dir)) return [];
  const files = fs.readdirSync(dir).filter(f => /\.mdx?$/i.test(f));
  const items = files.map(f => parseOne(dir, f, type));
  items.sort((a, b) => ts(b.date) - ts(a.date));
  return items;
}

export function getAllGuides() {
  return readCollection(DIRS.guides, "guide");
}
export function getAllBlog() {
  return readCollection(DIRS.blog, "blog");
}
export function getAllDeals() {
  return readCollection(DIRS.deals, "deal");
}

/** Unified docs for search & feeds */
export function getAllDocs() {
  const all = [...getAllGuides(), ...getAllBlog(), ...getAllDeals()];
  const seen = new Set();
  const out = [];
  for (const d of all) {
    const key = `${d.type}:${d.slug}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(d);
  }
  out.sort((a, b) => ts(b.date) - ts(a.date) || a.title.localeCompare(b.title));
  return out;
}
