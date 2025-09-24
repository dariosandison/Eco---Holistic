// src/lib/guides.js
// Reads markdown guides from /content/guides and returns safe, JSON-serializable data.

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const GUIDES_DIR = path.join(process.cwd(), "content", "guides");

function fileForSlug(slug) {
  const candidates = [
    path.join(GUIDES_DIR, `${slug}.md`),
    path.join(GUIDES_DIR, `${slug}.mdx`),
  ];
  for (const f of candidates) {
    if (fs.existsSync(f)) return f;
  }
  return null;
}

function toISO(value) {
  if (!value) return null;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return null;
  return d.toISOString().slice(0, 10); // YYYY-MM-DD
}

export function getAllGuidesSlugs() {
  if (!fs.existsSync(GUIDES_DIR)) return [];
  return fs
    .readdirSync(GUIDES_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getAllGuidesMeta() {
  const slugs = getAllGuidesSlugs();
  const metas = slugs.map((slug) => {
    const filepath = fileForSlug(slug);
    const raw = fs.readFileSync(filepath, "utf8");
    const { data } = matter(raw);

    const title = data.title ?? slug.replace(/-/g, " ");
    const description =
      data.description ??
      data.summary ??
      "";
    const date = toISO(data.date);
    const updated = toISO(data.updated);
    const image = data.image ?? null;
    const draft = data.draft === true || data.status === "draft";

    return {
      slug,
      title,
      description,
      date,
      updated,
      image,
      draft,
      // keep anything else in front-matter if needed (but JSON-safe)
      tags: Array.isArray(data.tags) ? data.tags : [],
      category: data.category ?? null,
      readingTime: data.readingTime ?? null,
    };
  });

  // sort newest first; safely handle null dates
  metas.sort((a, b) => {
    const da = a.date ? new Date(a.date).getTime() : 0;
    const db = b.date ? new Date(b.date).getTime() : 0;
    return db - da;
  });

  return metas;
}

export async function getGuideBySlug(slug) {
  const filepath = fileForSlug(slug);
  if (!filepath) return null;

  const raw = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(raw);

  // Convert markdown -> HTML (server-side)
  const processed = await remark().use(html).process(content || "");
  const contentHtml = String(processed);

  const meta = {
    slug,
    title: data.title ?? slug.replace(/-/g, " "),
    description: data.description ?? data.summary ?? "",
    date: toISO(data.date),
    updated: toISO(data.updated),
    image: data.image ?? null,
    draft: data.draft === true || data.status === "draft",
    tags: Array.isArray(data.tags) ? data.tags : [],
    category: data.category ?? null,
    readingTime: data.readingTime ?? null,
  };

  return { meta, contentHtml };
}
