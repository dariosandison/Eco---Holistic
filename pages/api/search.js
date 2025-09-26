// pages/api/search.js
// Node runtime (so fs is available via lib/content.js)
export const config = { runtime: "nodejs" };

import MiniSearch from "minisearch";

let indexPromise = null;

function extractTitleAndText(raw, slug) {
  if (!raw) return { title: slug, text: "" };

  // frontmatter title:
  const fmTitle = raw.match(/(^|\n)title:\s*["']?(.+?)["']?\s*($|\n)/i)?.[2];
  // first markdown H1:
  const h1Title = raw.match(/(^|\n)#\s+(.+)\n/)?.[2];

  const title = fmTitle || h1Title || slug.replace(/-/g, " ");
  // strip crude markdown for indexing
  const text = raw
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/[#>*_~`-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return { title, text };
}

async function buildIndex() {
  const { getAllGuideSlugs, readGuideFile } = await import("../../lib/content.js");

  const slugs = await getAllGuideSlugs();
  const docs = [];

  for (const slug of slugs) {
    try {
      const { content } = await readGuideFile(slug);
      const { title, text } = extractTitleAndText(content, slug);
      docs.push({ id: slug, slug, title, text });
    } catch {
      // ignore missing/bad files
    }
  }

  const mini = new MiniSearch({
    fields: ["title", "text"],
    storeFields: ["slug", "title"],
    searchOptions: { prefix: true, fuzzy: 0.2 }
  });

  mini.addAll(docs);
  return { mini, docs };
}

async function getIndex() {
  if (!indexPromise) indexPromise = buildIndex();
  return indexPromise;
}

export default async function handler(req, res) {
  const q = (req.query.q || "").toString().trim();
  if (!q) {
    return res.status(200).json({ query: "", results: [] });
  }

  const { mini, docs } = await getIndex();
  const results = mini.search(q, { combineWith: "AND" }).slice(0, 20).map(r => {
    const doc = docs.find(d => d.id === r.id);
    // make a tiny snippet
    const where = doc.text.toLowerCase().indexOf(q.toLowerCase());
    const start = Math.max(0, where - 60);
    const end = Math.min(doc.text.length, start + 160);
    const snippet = doc.text.slice(start, end) + (end < doc.text.length ? "…" : "");
    return { slug: doc.slug, title: doc.title, score: r.score, snippet };
  });

  res.status(200).json({ query: q, results });
}
