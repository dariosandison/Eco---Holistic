// /src/lib/guides.js
// ESM-friendly utilities to load Markdown guides at build time
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Try a few common folders; use the first that exists
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
  // Default (ok if empty)
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

// Tiny Markdown → HTML (covers common basics; no extra deps)
function toHtml(md) {
  if (!md) return "";

  // Escape HTML
  let html = md.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // Fences
  html = html.replace(/```([\s\S]*?)```/g, (_m, code) => `<pre><code>${code.trim()}</code></pre>`);
  // Inline code
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");

  // Headings
  html = html.replace(/^######\s?(.*)$/gm, "<h6>$1</h6>");
  html = html.replace(/^#####\s?(.*)$/gm, "<h5>$1</h5>");
  html = html.replace(/^####\s?(.*)$/gm, "<h4>$1</h4>");
  html = html.replace(/^###\s?(.*)$/gm, "<h3>$1</h3>");
  html = html.replace(/^##\s?(.*)$/gm, "<h2>$1</h2>");
  html = html.replace(/^#\s?(.*)$/gm, "<h1>$1</h1>");

  // Bold / italic
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/__([^_]+)__/g, "<strong>$1</strong>");
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  html = html.replace(/_([^_]+)_/g, "<em>$1</em>");

  // Links + images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2" />');
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Unordered lists
  html = html.replace(/^(?:-|\*) (.*(?:\n(?:-|\*) .*)*)/gm, (m) => {
    const items = m
      .split("\n")
      .map((l) => l.replace(/^(?:-|\*)\s+/, "").trim())
      .map((i) => `<li>${i}</li>`)
      .join("");
    return `<ul>${items}</ul>`;
  });

  // Ordered lists
  html = html.replace(/^(?:\d+)\. (.*(?:\n(?:\d+)\. .*)*)/gm, (m) => {
    const items = m
      .split("\n")
      .map((l) => l.replace(/^\d+\.\s+/, "").trim())
      .map((i) => `<li>${i}</li>`)
      .join("");
    return `<ol>${items}</ol>`;
  });

  // Paragraphs
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

function normalizeMeta(slug, data, content) {
  const title = data.title || slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const description = data.description || (content || "").replace(/\s+/g, " ").trim().slice(0, 160);
  const date = data.date ? String(data.date) : null;
  const updated = data.updated ? String(data.updated) : null;

  return {
    ...data,
    title,
    description,
    date,
    updated,
    draft: data.draft === true || data.status === "draft" ? true :
::contentReference[oaicite:0]{index=0}
