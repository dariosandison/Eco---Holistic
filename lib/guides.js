// lib/guides.js
import fs from "fs";
import path from "path";

const GUIDES_DIR = path.join(process.cwd(), "content", "guides");

function safeReadDir(dir) {
  try { return fs.readdirSync(dir); } catch { return []; }
}
function safeRead(filePath) {
  try { return fs.readFileSync(filePath, "utf8"); } catch { return ""; }
}

export function getAllGuides() {
  const files = safeReadDir(GUIDES_DIR).filter(f => f.endsWith(".md") || f.endsWith(".mdx"));
  const list = files.map((file) => {
    const slug = file.replace(/\.mdx?$/, "");
    const raw = safeRead(path.join(GUIDES_DIR, file));
    const firstLine = (raw.split("\n").find(l => l.trim()) || "").trim();
    const title = firstLine.replace(/^#\s*/, "") || slug.replace(/-/g, " ");
    const excerpt = raw.replace(/^---[\s\S]*?---\s*/m, "").trim().slice(0, 200);
    return {
      slug,
      title,
      excerpt,
      date: null,
      updated: null,
      image: null,
    };
  });
  return list;
}

export function getAllGuidesSlugs() {
  return getAllGuides().map(g => g.slug);
}

export function getGuideBySlug(slug) {
  const mdx = path.join(GUIDES_DIR, `${slug}.mdx`);
  const md  = path.join(GUIDES_DIR, `${slug}.md`);
  const fullPath = fs.existsSync(mdx) ? mdx : (fs.existsSync(md) ? md : null);
  if (!fullPath) return null;
  const raw = safeRead(fullPath);
  const firstLine = (raw.split("\n").find(l => l.trim()) || "").trim();
  const title = firstLine.replace(/^#\s*/, "") || slug.replace(/-/g, " ");
  const body = raw.replace(/^---[\s\S]*?---\s*/m, "").trim();
  return {
    meta: { slug, title, date: null, updated: null, image: null, description: "" },
    content: body,
  };
}
