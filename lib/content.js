import fs from "fs";
import path from "path";
import matter from "gray-matter";

const GUIDES_DIR = path.join(process.cwd(), "content", "guides");

function slugToTitle(slug){
  return slug.replace(/-/g, " ").replace(/\b\w/g, s => s.toUpperCase());
}
function extractExcerpt(content, words = 40){
  const text = content
    .replace(/<[^>]+>/g, " ")
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, " ")
    .replace(/`{1,3}[\s\S]*?`{1,3}/g, " ");
  const arr = text.split(/\s+/).filter(Boolean).slice(0, words);
  return arr.join(" ") + (arr.length >= words ? "…" : "");
}

export function getAllGuides(){
  if (!fs.existsSync(GUIDES_DIR)) return [];
  const files = fs
    .readdirSync(GUIDES_DIR)
    .filter(f => /\.mdx?$/.test(f));

  const items = files.map(filename => {
    const slug = filename.replace(/\.mdx?$/, "");
    const full = path.join(GUIDES_DIR, filename);
    const src = fs.readFileSync(full, "utf8");
    const { data, content } = matter(src);

    const title = data.title || slugToTitle(slug);
    const description = data.description || extractExcerpt(content, 28);
    const date = data.date || null;
    const cover = data.image || data.cover || null;
    const tags = Array.isArray(data.tags)
      ? data.tags
      : (typeof data.tags === "string" ? data.tags.split(/[|,]/).map(s=>s.trim()).filter(Boolean) : []);

    return { slug, title, description, date, cover, tags };
  });

  // newest first if dates; otherwise keep filename order
  items.sort((a,b) => new Date(b.date || 0) - new Date(a.date || 0));
  return items;
}
