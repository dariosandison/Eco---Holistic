import fs from "fs";
import path from "path";

const GUIDES_DIR = path.join(process.cwd(), "content", "guides");

function exists(p) {
  try { fs.accessSync(p); return true; } catch { return false; }
}

function read(slug) {
  const filePath = path.join(GUIDES_DIR, `${slug}.md`);
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch {
    return null;
  }
}

// tiny front-matter parser: ---\nkey: value\n---\ncontent
function parse(raw) {
  if (!raw) return { data: {}, content: "" };
  if (!raw.startsWith("---")) return { data: {}, content: raw };
  const end = raw.indexOf("\n---", 3);
  if (end === -1) return { data: {}, content: raw };
  const fm = raw.slice(3, end).trim();
  const content = raw.slice(end + 4).replace(/^\s*/, "");
  const data = {};
  for (const line of fm.split("\n")) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    const k = line.slice(0, i).trim();
    const v = line.slice(i + 1).trim().replace(/^['"]|['"]$/g, "");
    data[k] = v;
  }
  return { data, content };
}

function toTitle(slug = "") {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

export function getAllGuidesSlugs() {
  if (!exists(GUIDES_DIR)) return [];
  return fs
    .readdirSync(GUIDES_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getGuideBySlug(slug) {
  const raw = read(slug);
  const { data, content } = parse(raw);
  const date = data.date ? new Date(data.date) : null;
  const updated = data.updated ? new Date(data.updated) : null;

  const meta = {
    slug,
    title: data.title || toTitle(slug),
    description:
      data.description ||
      (content ? content.replace(/\n+/g, " ").slice(0, 160) : "") ||
      null,
    image: data.image || null,
    date: date ? date.toISOString() : null,
    updated: updated ? updated.toISOString() : null,
    draft: data.draft === "true" || data.status === "draft" ? true : false,
    tags: data.tags ? data.tags.split(",").map((t) => t.trim()) : [],
  };

  return { meta, content: content || "" };
}

export function getAllGuidesMeta() {
  const slugs = getAllGuidesSlugs();
  const items = slugs.map((s) => getGuideBySlug(s).meta);
  // sort newest first; missing dates go last
  items.sort((a, b) => {
    const ad = a.date ? Date.parse(a.date) : 0;
    const bd = b.date ? Date.parse(b.date) : 0;
    return bd - ad;
    });
  return items;
}
