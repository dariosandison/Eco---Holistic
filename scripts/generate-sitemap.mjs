// /scripts/generate-sitemap.mjs
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---------- helpers ----------
async function readJsonSafe(relative) {
  try {
    const p = path.join(__dirname, "..", relative);
    const raw = await fs.readFile(p, "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
function stripHtml(html = "") {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}
function toISODate(d) {
  try {
    return new Date(d).toISOString().slice(0, 10);
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
}

// ---------- sitemap ----------
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.wild-and-well.store";
const today = new Date().toISOString().slice(0, 10);

const staticPaths = [
  "/", "/about", "/contact", "/blog", "/guides",
  "/recommended", "/deals", "/privacy", "/terms",
  "/cookies", "/disclosure", "/search"
];

const urls = new Map();
staticPaths.forEach((p) =>
  urls.set(p, { loc: `${SITE}${p}`, lastmod: today, changefreq: "weekly" })
);

// blog urls
const blog = await readJsonSafe("src/data/blog.json");
if (blog?.posts?.length) {
  blog.posts.forEach((p) => {
    urls.set(`/blog/${p.slug}`, {
      loc: `${SITE}/blog/${p.slug}`,
      lastmod: toISODate(p.updated || p.date || today),
      changefreq: "monthly",
    });
  });
}

// guides urls (if present)
const guides = await readJsonSafe("src/data/guides.json");
if (guides?.items?.length) {
  guides.items.forEach((g) => {
    urls.set(`/guides/${g.slug}`, {
      loc: `${SITE}/guides/${g.slug}`,
      lastmod: toISODate(g.updated || g.date || today),
      changefreq: "monthly",
    });
  });
}

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...urls.values()]
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
  </url>`
  )
  .join("\n")}
</urlset>`;

// ---------- search index ----------
/**
 * Shape:
 * [
 *  { type:'blog'|'guide', title, excerpt, url, tags:[], date, haystack }
 * ]
 */
const index = [];

// blog -> index
if (blog?.posts?.length) {
  blog.posts.forEach((p) => {
    const excerpt = p.excerpt || stripHtml(p.contentHtml || "").slice(0, 220);
    const text = stripHtml(p.contentHtml || "");
    index.push({
      type: "blog",
      title: p.title,
      excerpt,
      url: `/blog/${p.slug}`,
      tags: p.tags || [],
      date: toISODate(p.updated || p.date || today),
      haystack: [p.title, excerpt, (p.tags || []).join(" "), text].join(" ").toLowerCase(),
    });
  });
}

// guides -> index (if present)
if (guides?.items?.length) {
  guides.items.forEach((g) => {
    const excerpt =
      g.excerpt || g.summary || stripHtml(g.contentHtml || g.html || "").slice(0, 220);
    const text = stripHtml(g.contentHtml || g.html || "");
    index.push({
      type: "guide",
      title: g.title,
      excerpt,
      url: `/guides/${g.slug}`,
      tags: g.tags || [],
      date: toISODate(g.updated || g.date || today),
      haystack: [g.title, excerpt, (g.tags || []).join(" "), text].join(" ").toLowerCase(),
    });
  });
}

// ---------- write files ----------
const outDir = path.join(__dirname, "..", "public");
await fs.mkdir(outDir, { recursive: true });
await fs.writeFile(path.join(outDir, "sitemap.xml"), sitemapXml, "utf8");
await fs.writeFile(path.join(outDir, "search-index.json"), JSON.stringify(index), "utf8");

console.log(`Sitemap written: ${path.join(outDir, "sitemap.xml")}`);
console.log(`Search index written: ${path.join(outDir, "search-index.json")} (${index.length} entries)`);
