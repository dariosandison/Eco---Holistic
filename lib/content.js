// lib/content.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serializeMdxString } from "./mdx";

const CONTENT_DIR = path.join(process.cwd(), "content");

function toIsoMaybe(v) {
  try {
    if (!v) return null;
    if (typeof v === "string") return v;
    if (v instanceof Date) return v.toISOString();
    const d = new Date(v);
    if (!isNaN(d)) return d.toISOString();
  } catch {}
  return null;
}

export function readFileSafe(p) {
  return fs.readFileSync(p, "utf-8");
}

export function getSlugs(subdir) {
  const dir = path.join(CONTENT_DIR, subdir);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export async function getBySlug(subdir, slug) {
  const dir = path.join(CONTENT_DIR, subdir);
  const full = path.join(dir, `${slug}.mdx`);
  const raw = readFileSafe(full);
  const { data, content } = matter(raw);

  const meta = {
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? "",
    badge: data.badge ?? data.tag ?? null,
    date: toIsoMaybe(data.date),
    updated: toIsoMaybe(data.updated || data.lastModified),
    ...Object.fromEntries(Object.entries(data).filter(([k]) => !["title","excerpt","badge","tag","date","updated","lastModified"].includes(k))),
  };

  const mdx = await serializeMdxString(content);

  return { meta, mdx };
}

export async function getAll(subdir) {
  const slugs = getSlugs(subdir);
  const items = await Promise.all(slugs.map((s) => getBySlug(subdir, s)));
  // ensure consistent ordering by (date desc, then title)
  return items
    .map((x, i) => ({ ...x.meta, slug: slugs[i] }))
    .sort((a, b) => {
      const da = Date.parse(b.date || "1970-01-01") - Date.parse(a.date || "1970-01-01");
      if (da !== 0) return da;
      return (a.title || "").localeCompare(b.title || "");
    });
}

// Convenience wrappers
export const getGuideSlugs = () => getSlugs("guides");
export const getGuideBySlug = (slug) => getBySlug("guides", slug);
export const getAllGuides = () => getAll("guides");

export const getLegalSlugs = () => getSlugs("legal");
export const getLegalBySlug = (slug) => getBySlug("legal", slug);

export const getBlogSlugs = () => getSlugs("blog");
export const getBlogBySlug = (slug) => getBySlug("blog", slug);
export const getAllBlog = () => getAll("blog");
