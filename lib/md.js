import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import readingTime from "reading-time";

const GUIDES_DIR = path.join(process.cwd(), "content", "guides");

export function listGuideSlugs() {
  if (!fs.existsSync(GUIDES_DIR)) return [];
  return fs.readdirSync(GUIDES_DIR).filter(f => f.endsWith(".md"));
}

export async function mdToHtml(md) {
  const result = await remark().use(html).process(md);
  return result.toString();
}

export async function getGuideBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(GUIDES_DIR, `${realSlug}.md`);
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);

  // Ensure serializable meta
  const date = (data.date && typeof data.date === "string")
    ? data.date
    : new Date().toISOString().slice(0,10);

  const html = await mdToHtml(content);
  const read = readingTime(content || "").text;

  return {
    slug: realSlug,
    meta: {
      title: data.title || realSlug,
      description: data.description || "",
      date,
      tags: data.tags || [],
      heroImage: data.heroImage || "/cover.png",
      picks: data.picks || [],         // optional: array of top picks
      faq: data.faq || [],             // optional: array of {q,a}
      table: data.table || []          // optional: comparison objects
    },
    html,
    readingTime: read
  };
}

export async function getAllGuidesMeta() {
  const slugs = listGuideSlugs();
  const items = await Promise.all(
    slugs.map(s => getGuideBySlug(s.replace(".md","")))
  );
  // sort newest first (string compare YYYY-MM-DD)
  items.sort((a, b) => (b.meta.date || "").localeCompare(a.meta.date || ""));
  // return lightweight data
  return items.map(({ slug, meta, readingTime }) => ({
    slug,
    meta,
    readingTime
  }));
}

export async function getRelatedGuides(currentSlug, take = 3) {
  const all = await getAllGuidesMeta();
  const current = all.find(x => x.slug === currentSlug);
  if (!current) return all.slice(0, take);
  const tags = new Set(current.meta.tags || []);
  const scored = all
    .filter(x => x.slug !== currentSlug)
    .map(x => ({
      ...x,
      score: (x.meta.tags || []).reduce((acc, t) => acc + (tags.has(t) ? 1 : 0), 0)
    }))
    .sort((a,b) => b.score - a.score || (b.meta.date || "").localeCompare(a.meta.date || ""));
  return scored.slice(0, take);
}
