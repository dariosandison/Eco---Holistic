// scripts/generate-sitemap.mjs
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.wild-and-well.store";
const publicDir = path.join(process.cwd(), "public");
const guidesDir = path.join(process.cwd(), "content", "guides");

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

const staticPaths = [
  "/", "/guides", "/recommended",
  "/disclosure", "/privacy", "/cookies"
];

const urls = [];

// Static pages
const now = new Date().toISOString();
staticPaths.forEach((p) => {
  urls.push({ loc: `${SITE}${p}`, lastmod: now, changefreq: "weekly", priority: "0.7" });
});

// Guides from Markdown
if (fs.existsSync(guidesDir)) {
  const files = fs.readdirSync(guidesDir).filter((f) => f.endsWith(".md"));
  for (const file of files) {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(guidesDir, file), "utf8");
    const { data } = matter(raw);
    const fmDate = (typeof data.date === "string" ? data.date : "") || "";
    const stat = fs.statSync(path.join(guidesDir, file));
    const lastmod = (fmDate && /^\d{4}-\d{2}-\d{2}/.test(fmDate))
      ? new Date(fmDate).toISOString()
      : stat.mtime.toISOString();

    urls.push({
      loc: `${SITE}/guides/${slug}`,
      lastmod,
      changefreq: "monthly",
      priority: "0.8"
    });
  }
}

// Build XML
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

// Write sitemap
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), xml, "utf8");

// Ensure robots.txt exists (don’t overwrite if you’ve customized it)
const robotsPath = path.join(publicDir, "robots.txt");
if (!fs.existsSync(robotsPath)) {
  fs.writeFileSync(
    robotsPath,
    `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`,
    "utf8"
  );
}

console.log("✓ sitemap.xml (and robots.txt if missing) generated");
