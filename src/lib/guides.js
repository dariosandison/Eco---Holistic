// /src/lib/guides.js
import guidesData from "../data/guides.json" assert { type: "json" };

// Ensure we always work with plain JSON-serializable values (strings, arrays)
function normalizeGuide(g) {
  return {
    slug: g.slug,
    title: g.title,
    excerpt: g.excerpt || "",
    date: String(g.date || ""),
    updated: String(g.updated || g.date || ""),
    tags: Array.isArray(g.tags) ? g.tags : [],
    contentHtml: g.contentHtml || "",
    products: Array.isArray(g.products) ? g.products : []
  };
}

const GUIDES = guidesData.map(normalizeGuide);

export function getAllGuidesMeta() {
  return GUIDES.map(({ slug, title, excerpt, date, updated, tags }) => ({
    slug,
    title,
    excerpt,
    date,
    updated,
    tags
  }));
}

export function getAllGuidesSlugs() {
  return GUIDES.map((g) => g.slug);
}

export function getGuideBySlug(slug) {
  const found = GUIDES.find((g) => g.slug === slug);
  return found ? normalizeGuide(found) : null;
}

export function getAllGuides() {
  return GUIDES;
}
