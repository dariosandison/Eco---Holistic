// src/lib/blog.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const CANDIDATES = ["content/blog", "src/content/blog", "blog", "data/blog"];

function blogDir() {
  const cwd = process.cwd();
  for (const rel of CANDIDATES) {
    const p = path.join(cwd, rel);
    if (fs.existsSync(p)) return p;
  }
  return null;
}

function toISO(val) {
  if (!val) return undefined;
  const d = new Date(val);
  return Number.isNaN(d) ? undefined : d.toISOString().slice(0, 10);
}

export function getAllPostSlugs() {
  const dir = blogDir();
  if (!dir) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export async function getPostBySlug(slug) {
  const dir = blogDir();
  if (!dir) {
    return {
      slug,
      html: "<p>Post coming soon.</p>",
      meta: { slug, title: "Coming soon", description: "" },
    };
  }
  const md = path.join(dir, `${slug}.md`);
  const mdx = path.join(dir, `${slug}.mdx`);
  const filePath = fs.existsSync(md) ? md : mdx;
  if (!filePath || !fs.existsSync(filePath)) {
    return {
      slug,
      html: "<p>Post not found.</p>",
      meta: { slug, title: slug.replace(/-/g, " "), description: "" },
    };
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  const meta = {
    slug,
    title: data.title || slug.replace(/-/g, " "),
    description: data.description || data.excerpt || "",
    date: toISO(data.date),
    updated: toISO(data.updated),
    draft: data.draft === true || data.status === "draft" ? true : false,
    image: data.image || undefined,
    tags: Array.isArray(data.tags) ? data.tags : [],
  };

  return { slug, html: contentHtml, meta };
}

export function getAllPostsMeta() {
  const dir = blogDir();
  if (!dir) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(dir, f), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title || slug.replace(/-/g, " "),
        description: data.description || data.excerpt || "",
        date: toISO(data.date),
        updated: toISO(data.updated),
        draft: data.draft === true || data.status === "draft" ? true : false,
        image: data.image || undefined,
        tags: Array.isArray(data.tags) ? data.tags : [],
      };
    })
    .filter((i) => !i.draft)
    .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
}
