// lib/blog.js
import fs from "fs";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

// Safely read directory; return [] if it doesn't exist
function safeReadDir(dir) {
  try { return fs.readdirSync(dir); } catch { return []; }
}

export function getAllPostsMeta() {
  const files = safeReadDir(BLOG_DIR).filter(f => f.endsWith(".md") || f.endsWith(".mdx"));
  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx?$/, "");
    // Minimal meta; expand later if you add frontmatter
    return { slug, title: slug.replace(/-/g, " "), date: null, excerpt: "" };
  });
  return posts;
}

export function getAllPostSlugs() {
  return getAllPostsMeta().map(p => p.slug);
}

export function getPostBySlug(slug) {
  const mdPathMdx = path.join(BLOG_DIR, `${slug}.mdx`);
  const mdPathMd  = path.join(BLOG_DIR, `${slug}.md`);
  let fullPath = fs.existsSync(mdPathMdx) ? mdPathMdx : (fs.existsSync(mdPathMd) ? mdPathMd : null);
  if (!fullPath) return null;
  const source = fs.readFileSync(fullPath, "utf8");
  return {
    slug,
    title: slug.replace(/-/g, " "),
    date: null,
    content: source
  };
}
