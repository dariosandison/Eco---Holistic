// src/lib/guides.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import slugify from "slugify";

const guidesDir = path.join(process.cwd(), "content", "guides");

function readFile(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function parseGuideFile(filePath) {
  const raw = readFile(filePath);
  const { content, data } = matter(raw);

  const fileSlug = path.basename(filePath).replace(/\.mdx?$/, "");
  const title = data.title || fileSlug;

  // Always have a clean, URL-safe slug
  const slug =
    data.slug ||
    slugify(title, {
      lower: true,
      strict: true,
    });

  // Ensure date is an ISO string (so Next.js can serialize on export)
  let date = null;
  if (data.date) {
    const d = new Date(data.date);
    if (!Number.isNaN(d.valueOf())) date = d.toISOString();
  }

  return {
    content,
    meta: {
      ...data,
      title,
      slug,
      date, // ISO or null
    },
  };
}

export function getAllGuideSlugs() {
  return fs
    .readdirSync(guidesDir)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getGuideBySlug(slug) {
  const md = path.join(guidesDir, `${slug}.md`);
  const mdx = path.join(guidesDir, `${slug}.mdx`);
  const filePath = fs.existsSync(md) ? md : fs.existsSync(mdx) ? mdx : null;
  if (!filePath) throw new Error(`Guide not found: ${slug}`);
  return parseGuideFile(filePath);
}

export function getAllGuides() {
  const files = fs.readdirSync(guidesDir).filter((f) => /\.mdx?$/.test(f));
  const posts = files.map((f) => parseGuideFile(path.join(guidesDir, f)));
  // Newest first
  return posts.sort((a, b) => {
    const at = a.meta.date ? Date.parse(a.meta.date) : 0;
    const bt = b.meta.date ? Date.parse(b.meta.date) : 0;
    return bt - at;
  });
}
