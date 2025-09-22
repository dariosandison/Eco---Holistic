// src/lib/guides.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import slugify from "slugify";

const GUIDES_DIR = path.join(process.cwd(), "content", "guides");

const isMD = (f) => /\.mdx?$/.test(f);

export function getAllGuideSlugs() {
  if (!fs.existsSync(GUIDES_DIR)) return [];
  return fs.readdirSync(GUIDES_DIR).filter(isMD).map((f) => f.replace(/\.mdx?$/, ""));
}

function fileFor(slug) {
  const md = path.join(GUIDES_DIR, `${slug}.md`);
  const mdx = path.join(GUIDES_DIR, `${slug}.mdx`);
  return fs.existsSync(md) ? md : mdx;
}

export function readGuide(slug) {
  const p = fileFor(slug);
  const raw = fs.readFileSync(p, "utf8");
  const { data, content } = matter(raw);

  // Normalize/serialize date
  const rawDate = data.date ?? data.published ?? null;
  const isoDate =
    typeof rawDate === "string"
      ? new Date(rawDate).toISOString()
      : rawDate && typeof rawDate.toISOString === "function"
      ? rawDate.toISOString()
      : null;

  const meta = {
    title: data.title || slug,
    description: data.description || data.excerpt || "",
    coverImage: data.coverImage || data.image || null,
    tags: Array.isArray(data.tags)
      ? data.tags
      : data.tags
      ? String(data.tags).split(",").map((t) => t.trim()).filter(Boolean)
      : [],
    slug: slugify(slug, { lower: true, strict: true }),
    date: isoDate, // <- JSON-serializable
    author: data.author || null,
  };

  return { meta, content };
}

export function getAllGuidesMeta() {
  return getAllGuideSlugs()
    .map((s) => readGuide(s).meta)
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}
