// /scripts/generate-sitemap.mjs
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helpers
async function readJsonSafe(relative) {
  try {
    const p = path.join(__dirname, "..", relative);
    const raw = await fs.readFile(p, "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.wild-and-well.store";
const today = new Date().toISOString().slice(0, 10);

// Static pages
const staticPaths = [
  "/", "/about", "/contact", "/blog", "/guides",
  "/recommended", "/deals", "/privacy", "/terms",
  "/cookies", "/disclosure"
];

const urls = new Map();
staticPaths.forEach((p) => urls.set(p, { loc: `${SITE}${p}`, lastmod: today, changefreq: "weekly" }));

// Blog posts from JSON
const blog = await readJsonSafe("src/data/blog.json");
if (blog?.posts?.length) {
  blog.posts.forEach((p) => {
    urls.set(`/blog/${p.slug}`, {
      loc: `${SITE}/blog/${p.slug}`,
      lastmod: (p.updated || p.date || today),
      changefreq: "monthly"
    });
  });
}

// (Optional) Guides from JSON if present
const guides = await readJsonSafe("src/data/guides.json");
if (guides?.items?.length) {
  guides.items.forEach((g) => {
    urls.set(`/guides/${g.slug}`, {
      loc: `${SITE}/guides/${g.slug}`,
      lastmod: (g.updated || g.date || today),
      changefreq: "monthly"
    });
  });
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
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

const outDir = path.join(__dirname, "..", "public");
await fs.mkdir(outDir, { recursive: true });
await fs.writeFile(path.join(outDir, "sitemap.xml"), xml, "utf8");

console.log(`Sitemap written: ${path.join(outDir, "sitemap.xml")}`);
