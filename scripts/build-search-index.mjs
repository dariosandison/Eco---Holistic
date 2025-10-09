import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ROOT = process.cwd();
const SECTIONS = ["guides", "blog", "legal"];

function pickText(str, max=240) {
  const s = (str || "").replace(/\s+/g, " ").trim();
  return s.length > max ? s.slice(0, max) + "…" : s;
}

const items = [];

for (const sec of SECTIONS) {
  const dir = path.join(ROOT, "content", sec);
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir)) {
    if (!/\.mdx?$/.test(f)) continue;
    const slug = f.replace(/\.mdx?$/, "");
    const raw = fs.readFileSync(path.join(dir, f), "utf8");
    const { content, data } = matter(raw);
    items.push({
      section: sec,
      slug,
      title: data.title || slug.replace(/-/g, " "),
      description: data.description || pickText(content),
      path: `/${sec}/${slug}`
    });
  }
}

const outDir = path.join(ROOT, "public");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
fs.writeFileSync(path.join(outDir, "search-index.json"), JSON.stringify(items, null, 2), "utf8");
console.log(`Built search index with ${items.length} items.`);
