// /src/lib/blog.js
import data from "../data/blog.json";

function sortByDateDesc(a, b) {
  return (b.updated || b.date).localeCompare(a.updated || a.date);
}

export function getAllPosts() {
  return [...(data.posts || [])].sort(sortByDateDesc);
}

export function getAllPostSlugs() {
  return getAllPosts().map((p) => p.slug);
}

export function getPostBySlug(slug) {
  const post = getAllPosts().find((p) => p.slug === slug);
  if (!post) return null;
  // Ensure JSON-serializable props only (strings/arrays)
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt || "",
    date: post.date,
    updated: post.updated || post.date,
    authorName: post.authorName || "Wild & Well",
    tags: post.tags || [],
    coverImage: post.coverImage || "",
    contentHtml: post.contentHtml || ""
  };
}
