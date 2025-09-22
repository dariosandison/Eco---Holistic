// /src/lib/guides.js
// Utilities to load Markdown guides at build time (ESM-safe)

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CANDIDATE_DIRS = [
  "content/guides",
  "src/content/guides",
  "data/guides",
  "guides",
  "content",
];

function rootPath(...segments) {
  return path.join(process.cwd(), ...segments);
}

function findGuidesDir() {
  for (const p of CANDIDATE_DIRS) {
    const full = rootPath(p);
    if (fs.existsSync(full) && fs.statSync(full).isDirectory()) return full;
  }
  // default (ok if empty)
  return rootPath("content/guides");
}

const GUIDES_DIR = findGuidesDir();

function listGuideFiles() {
  if (!fs.existsSync(GUIDES_DIR)) return [];
  return fs
    .readdirSync(GUIDES_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .sort();
}

function slugFromFilename(filename) {
  return filename.replace(/\.mdx?$/i, "");
}

// Minimal Markdown → HTML (good enough for our content)
function toHtml(md) {
  if (!md) return "";

  // escape basic HTML
  let html = md.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // code fences
  html = html.replace(/```([\s\S]*?)```/g, (_m, code) => `<pre><code>${code.trim()}</code></pre>`);
  // inline code
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");

  // headings
  html = html.replace(/^######\s?(.*)$/gm, "<h6>$1</h6>");
  html = html.replace(/^#####\s?(.*)$/gm, "<h5>$1</h5>");
  html = html.replace(/^####\s?(.*)$/gm, "<h4>$1</h4>");
  html = html.replace(/^###\s?(.*)$/gm, "<h3>$1</h3>");
  html = html.replace(/^##\s?(.*)$/gm, "<h2>$1</h2>");
  html = html.replace(/^#\s?(.*)$/gm, "<h1>$1</h1>");

  // emphasis
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/__([^_]+)__/g, "<strong>$1</strong>");
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  html = html.replace(/_([^_]+)_/g, "<em>$1</em>");

  // images and links
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2" />');
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // unordered lists
  html = html.replace(/^(?:-|\*) (.*(?:\n(?:-|\*) .*)*)/gm, (m) => {
    const items = m
      .split("\n")
      .map((l) => l.replace(/^(?:-|\*)\s+/, "").trim())
      .map((i) => `<li>${i}</li>`)
      .join("");
    return `<ul>${items}</ul>`;
  });

  // ordered lists
  html = html.replace(/^(?:\d+)\. (.*(?:\n(?:\d+)\. .*)*)/gm, (m) => {
    const items = m
      .split("\n")
      .map((l) => l.replace(/^\d+\.\s+/, "").trim())
      .map((i) => `<li>${i}</li>`)
      .join("");
    return `<ol>${items}</ol>`;
  });

  // paragraph wrap remaining blocks
  html = html
    .split(/\n{2,}/)
    .map((block) =>
      /^\s*<(h\d|ul|ol|li|pre|img|blockquote|p|table|code)/i.test(block)
        ? block
        : `<p>${block.replace(/\n/g, "<br/>")}</p>`
    )
    .join("\n");

  return html;
}

function toDateString(val) {
  if (!val) return null;
  const d =
    val instanceof Date
      ? val
      : typeof val === "string"
      ? new Date(val)
      : new Date(String(val));
  if (Number.isNaN(d.getTime())) return String(val);
  return d.toISOString().slice(0, 10); // YYYY-MM-DD
}

function normalizeMeta(slug, data, content) {
  const title =
    data.title || slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const description =
    data.description || (content || "").replace(/\s+/g, " ").trim().slice(0, 160);

  return {
    ...data,
    title,
    description,
    date: toDateString(data.date),
    updated: toDateString(data.updated),
    draft: data.draft === true || data.status === "draft",
    status: data.status || (data.draft ? "draft" : "published"),
  };
}

export async function getAllGuides() {
  const files = listGuideFiles();
  return files.map((file) => {
    const slug = slugFromFilename(file);
    const raw = fs.readFileSync(path.join(GUIDES_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    const meta = normalizeMeta(slug, data, content);
    const html = toHtml(content || "");
    return { slug, meta, content: content || "", html };
  });
}

export async function getAllGuidesMeta() {
  const guides = await getAllGuides();
  return guides.map(({ slug, meta }) => ({ slug, meta }));
}

export async function getAllGuidesSlugs() {
  const files = listGuideFiles();
  return files.map(slugFromFilename);
}

export async function getGuideBySlug(slug) {
  const fileMd = path.join(GUIDES_DIR, `${slug}.md`);
  const fileMdx = path.join(GUIDES_DIR, `${slug}.mdx`);
  const file = fs.existsSync(fileMd) ? fileMd : fs.existsSync(fileMdx) ? fileMdx : null;

  if (!file) {
    return {
      slug,
      meta: { title: slug.replace(/-/g, " "), draft: true },
      content: "",
      html: "<p>Guide not found.</p>",
    };
    }
  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);
  const meta = normalizeMeta(slug, data, content);
  const html = toHtml(content || "");
  return { slug, meta, content: content || "", html };
}
