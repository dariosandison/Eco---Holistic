// lib/guides.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

const guidesDir = path.join(process.cwd(), "content/guides");

export function getGuideSlugs() {
  if (!fs.existsSync(guidesDir)) return [];
  return fs
    .readdirSync(guidesDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export async function getGuideBySlug(slug) {
  const filePath = path.join(guidesDir, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  // Convert Markdown -> HTML string (NO React nodes)
  const processed = await remark().use(remarkGfm).use(html).process(content);
  const contentHtml = processed.toString(); // guaranteed string

  const front = {
    title: typeof data.title === "string" ? data.title : "",
    excerpt: typeof data.excerpt === "string" ? data.excerpt : "",
    date: data.date || null,
    slug,
  };

  return { front, contentHtml };
}

export async function getAllGuides() {
  const slugs = getGuideSlugs();
  const items = await Promise.all(slugs.map((s) => getGuideBySlug(s)));
  // sort newest first if date exists
  return items.sort((a, b) => {
    const da = a.front.date ? new Date(a.front.date).getTime() : 0;
    const db = b.front.date ? new Date(b.front.date).getTime() : 0;
    return db - da;
  });
}
