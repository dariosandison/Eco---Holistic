// /src/lib/blog.js
import blogData from "../data/blog.json" assert { type: "json" };

function normalizePost(p) {
  return {
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt || "",
    date: String(p.date || ""),
    updated: String(p.updated || p.date || ""),
    tags: Array.isArray(p.tags) ? p.tags : [],
    contentHtml: p.contentHtml || ""
  };
}

const POSTS = blogData.map(normalizePost);

export function getAllPostsMeta() {
  return POSTS.map(({ slug, title, excerpt, date, updated, tags }) => ({
    slug,
    title,
    excerpt,
    date,
    updated,
    tags
  }));
}

export function getAllPostSlugs() {
  return POSTS.map((p) => p.slug);
}

export function getPostBySlug(slug) {
  const found = POSTS.find((p) => p.slug === slug);
  return found ? normalizePost(found) : null;
}
