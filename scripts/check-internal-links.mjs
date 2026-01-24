/**
 * Internal link checker (fast, no network).
 * - Extracts routes from app/sitemap.js
 * - Scans app/ and content/ for internal href="/..." and markdown links
 * - Verifies targets exist as:
 *    - a route in sitemap, OR
 *    - a blog slug in content/blog, OR
 *    - a guide slug in content/guides
 */
import fs from "fs";
import path from "path";

const root = process.cwd();

function readText(p) {
  return fs.readFileSync(p, "utf8");
}

function listFiles(dir, exts) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFiles(p, exts));
    else if (exts.includes(path.extname(entry.name))) out.push(p);
  }
  return out;
}

function extractRoutesFromSitemap() {
  const p = path.join(root, "app", "sitemap.js");
  const txt = readText(p);
  const m = txt.match(/\[[\s\S]*?\]/);
  if (!m) return new Set();
  const arrTxt = m[0];
  const routes = new Set();
  const reRoute = /'([^']+)'/g;
  let r;
  while ((r = reRoute.exec(arrTxt))) routes.add(r[1]);
  return routes;
}

function loadSlugs(contentDir) {
  const dir = path.join(root, "content", contentDir);
  if (!fs.existsSync(dir)) return new Set();
  const slugs = new Set();
  for (const f of fs.readdirSync(dir)) {
    if (f.endsWith(".mdx") || f.endsWith(".md")) {
      slugs.add(f.replace(/\.(mdx|md)$/, ""));
    }
  }
  return slugs;
}

const routes = extractRoutesFromSitemap();
const blogSlugs = loadSlugs("blog");
const guideSlugs = loadSlugs("guides");

const scanDirs = [
  { dir: path.join(root, "app"), exts: [".js", ".jsx", ".ts", ".tsx"] },
  { dir: path.join(root, "components"), exts: [".js", ".jsx", ".ts", ".tsx"] },
  { dir: path.join(root, "content"), exts: [".mdx", ".md"] },
];

const hrefRe = /href\s*=\s*["'](\/[^"']+)["']/g;
const mdLinkRe = /\[[^\]]+\]\((\/[^)]+)\)/g;

function isOk(target) {
  if (!target.startsWith("/")) return true;
  if (target.startsWith("//")) return true;
  const clean = target.split("#")[0].split("?")[0];

  // known dynamic patterns
  if (clean.startsWith("/blog/")) {
    const slug = clean.replace("/blog/", "");
    return blogSlugs.has(slug) || routes.has("/blog");
  }
  if (clean.startsWith("/guides/")) {
    const slug = clean.replace("/guides/", "");
    return guideSlugs.has(slug) || routes.has("/guides");
  }
  return routes.has(clean);
}

const errors = [];
for (const sd of scanDirs) {
  if (!fs.existsSync(sd.dir)) continue;
  const files = listFiles(sd.dir, sd.exts);
  for (const file of files) {
    const txt = readText(file);
    let m;
    while ((m = hrefRe.exec(txt))) {
      const target = m[1];
      if (target.startsWith("/api")) continue;
      if (!isOk(target)) errors.push({ file, target });
    }
    while ((m = mdLinkRe.exec(txt))) {
      const target = m[1];
      if (!isOk(target)) errors.push({ file, target });
    }
  }
}

if (errors.length) {
  console.error("Broken internal links found:");
  for (const e of errors) console.error(`- ${e.target}  (${e.file})`);
  process.exit(1);
} else {
  console.log("✅ Internal link check passed.");
}
