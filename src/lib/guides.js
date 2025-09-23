// src/lib/guides.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const CANDIDATES = [
  "content/guides",
  "src/content/guides",
  "guides",
  "data/guides",
];

function guidesDir() {
  const cwd = process.cwd();
  for (const rel of CANDIDATES) {
    const p = path.join(cwd, rel);
    if (fs.existsSync(p)) return p;
  }
  // Fall back to an empty temp dir if none exist
  return null;
}

function toISODate(val) {
  if (!val) return undefined;
  const d = new Date(val);
  if (Number.isNaN(d.getTime())) return undefined;
  return d.toISOString().slice(0, 10);
}

export async function getGuideBySlug(slug) {
  const dir = guidesDir();
  if (!dir) {
    return {
      slug,
      html: "<p>Content coming soon.</p>",
      meta: { slug, title: "Coming soon", description: "", date: undefined },
    };
  }
  const mdPath = path.join(dir, `${slug}.md`);
  const mdxPath = path.join(dir, `${slug}.mdx`);
  const filePath = fs.existsSync(mdPath) ? mdPath : mdxPath;
  if (!filePath || !fs.existsSync(filePath)) {
    return {
      slug,
      html: "<p>Content not found.</p>",
      meta: { slug, title: slug, description: "", date: undefined },
    };
  }

  const file = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(file);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  const meta = {
    slug,
    title: data.title || slug.replace(/-/g, " "),
    description: data.description || data.excerpt || "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    date: toISODate(data.date),
    updated: toISODate(data.updated),
    draft: data.draft === true || data.status === "draft" ? true : false,
    image: data.image || undefined,
  };

  return { slug, html: contentHtml, meta };
}

export function getAllGuidesSlugs() {
  const dir = guidesDir();
  if (!dir) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getAllGuidesMeta() {
  const slugs = getAllGuidesSlugs();
  const items = slugs.map((slug) => {
    const dir = guidesDir();
    const tryPath = (p) => (fs.existsSync(p) ? fs.readFileSync(p, "utf8") : "");
    const raw =
      tryPath(path.join(dir, `${slug}.md`)) ||
      tryPath(path.join(dir, `${slug}.mdx`));
    const { data } = matter(raw);
    return {
      slug,
      title: data.title || slug.replace(/-/g, " "),
      description: data.description || data.excerpt || "",
      tags: Array.isArray(data.tags) ? data.tags : [],
      date: toISODate(data.date),
      updated: toISODate(data.updated),
      draft: data.draft === true || data.status === "draft" ? true : false,
      image: data.image || undefined,
    };
  });

  return items
    .filter((i) => !i.draft) // hide drafts from listing
    .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
}
