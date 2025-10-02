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

function parseOne(dir, filename, type) {
  const slug = filename.replace(/\.mdx?$/i, "");
  const full = path.join(dir, filename);
  const raw = safeRead(full);
  const { data = {}, content = "" } = matter(raw);

  // Normalize fields
  const title = data.title || toTitle(slug);
  const description = data.description || excerptFrom(content, 28);
  const date = data.date || data.updated || null;
  const cover = data.image || data.cover || data.hero || null;

  // tags can be array or "a | b" or "a, b"
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
  // newest first when date present
  items.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
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

/**
 * Unified docs for search and feeds.
 * Returns: [{ type, slug, title, description, date, cover, tags }]
 */
export function getAllDocs() {
  const all = [
    ...getAllGuides(),
    ...getAllBlog(),
    ...getAllDeals(),
  ];

  // Dedupe on type+slug just in case
  const seen = new Set();
  const out = [];
  for (const d of all) {
    const key = `${d.type}:${d.slug}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(d);
  }
  // Sort by date desc, fallback to alpha
  out.sort((a, b) => {
    const d = new Date(b.date || 0) - new Date(a.date || 0);
    if (d !== 0) return d;
    return a.title.localeCompare(b.title);
  });
  return out;
}
