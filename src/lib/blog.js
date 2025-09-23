// src/lib/blog.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CANDIDATES = ["content/blog", "src/content/blog", "blog", "data/blog"];

function blogDir() {
  const cwd = process.cwd();
  for (const rel of CANDIDATES) {
    const p = path.join(cwd, rel);
    if (fs.existsSync(p)) return p;
  }
  return null;
}

function toISODate(val) {
  if (!val) return undefined;
  const d = new Date(val);
  if (Number.isNaN(d.getTime())) return undefined;
  return d.toISOString().slice(0, 10);
}

export function getAllPostsMeta() {
  const dir = blogDir();
  if (!dir) return [];
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  const items = files.map((f) => {
    const slug = f.replace(/\.mdx?$/, "");
    const raw = fs.readFileSync(path.join(dir, f), "utf8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title || slug.replace(/-/g, " "),
      description: data.description || data.excerpt || "",
      date: toISODate(data.date),
      updated: toISODate(data.updated),
      draft: data.draft === true || data.status === "draft" ? true : false,
      image: data.image || undefined,
      tags: Array.isArray(data.tags) ? data.tags : [],
    };
  });

  return items
    .filter((i) => !i.draft)
    .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
}
