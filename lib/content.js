import fs from "fs";
import path from "path";

/** very small front-matter parser (no extra deps) */
function parseFrontmatter(raw) {
  let data = {};
  let content = raw;
  if (raw.startsWith("---")) {
    const end = raw.indexOf("\n---");
    if (end !== -1) {
      const header = raw.slice(3, end).trim();
      content = raw.slice(end + 4).trim();
      for (const line of header.split("\n")) {
        const i = line.indexOf(":");
        if (i > -1) {
          const key = line.slice(0, i).trim();
          let val = line.slice(i + 1).trim();
          if (/^\d{4}-\d{2}-\d{2}/.test(val)) val = new Date(val);
          if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
          if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
          data[key] = val;
        }
      }
    }
  }
  return { data, content };
}

function readDirSafe(dir) {
  try { return fs.readdirSync(dir); } catch { return []; }
}
function readFileSafe(p) {
  try { return fs.readFileSync(p, "utf8"); } catch { return null; }
}
function toSlug(file) {
  return file.replace(/\.(md|mdx)$/i, "");
}

function loadCollection(dirRel, type) {
  const base = path.join(process.cwd(), dirRel);
  const files = readDirSafe(base).filter(f => /\.(md|mdx)$/i.test(f));
  return files.map(f => {
    const raw = readFileSafe(path.join(base, f)) ?? "";
    const { data, content } = parseFrontmatter(raw);
    const slug = toSlug(f);
    const title = data.title || slug.replace(/-/g, " ");
    const date = data.date instanceof Date ? data.date : undefined;
    const excerpt = (data.excerpt || content.slice(0, 160)).toString();
    return { type, slug, title, date, excerpt };
  });
}

/** For /api/search and general indexing */
export function getAllDocs() {
  return [
    ...loadCollection("content/guides", "guide"),
    ...loadCollection("content/blog", "blog"),
    ...loadCollection("content/deals", "deal"),
    ...loadCollection("content/legal", "legal"),
  ];
}

/** For /blog index */
export function getAllBlog() {
  return loadCollection("content/blog", "blog")
    .sort((a, b) => (b.date?.getTime?.() || 0) - (a.date?.getTime?.() || 0));
}
