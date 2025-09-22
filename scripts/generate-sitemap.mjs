// /scripts/generate-sitemap.mjs
import { writeFileSync, existsSync, mkdirSync } from "fs";
import { SITE } from "../src/site.config.js";

// We import dynamically to avoid any Node/Next bundling quirks
const guidesLib = await import("../src/lib/guides.js").catch(() => null);

const BASE_URL = SITE.url.replace(/\/+$/, "");
const STATIC_ROUTES = [
  "/", "/guides", "/deals", "/about", "/privacy",
  "/terms", "/contact", "/recommended", "/cookies", "/disclosure"
];

async function getGuideUrls() {
  if (!guidesLib) return [];
  const all = (await guidesLib.getAllGuides?.()) || [];
  const clean = all
    .filter(g => g?.meta && g.meta.draft !== true && (g.meta.status ? g.meta.status === "published" : true))
    .map(g => ({
      loc: `${BASE_URL}/guides/${g.slug}`,
      lastmod: (g.meta?.updated || g.meta?.date) ? new Date(g.meta.updated || g.meta.date).toISOString() : undefined,
    }));
  return clean;
}

function urlTag({ loc, lastmod, changefreq = "weekly", priority = "0.7" }) {
  return `
  <url>
    <loc>${loc}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

async function main() {
  const staticUrls = STATIC_ROUTES.map((p) => ({
    loc: `${BASE_URL}${p}`,
    changefreq: "weekly",
    priority: p === "/" ? "1.0" : "0.8",
  }));

  const guideUrls = await getGuideUrls();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...guideUrls].map(urlTag).join("\n")}
</urlset>`.trim();

  if (!existsSync("public")) mkdirSync("public");
  writeFileSync("public/sitemap.xml", xml, { encoding: "utf-8" });
  console.log("✓ sitemap.xml generated");
}

await main();
