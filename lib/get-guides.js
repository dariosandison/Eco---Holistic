// lib/get-guides.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const GUIDES_DIR = path.join(process.cwd(), "content", "guides");

export function getAllGuides() {
  if (!fs.existsSync(GUIDES_DIR)) return [];

  const files = fs
    .readdirSync(GUIDES_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const guides = files.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, "");
    const fullPath = path.join(GUIDES_DIR, filename);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title ?? slug.replace(/-/g, " "),
      description: data.description ?? data.excerpt ?? "",
      date: data.date ?? null,
      coverImage: data.coverImage ?? data.image ?? data.cover ?? null,
      draft: data.draft ?? false,
    };
  });

  return guides
    .filter((g) => !g.draft)
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
}
