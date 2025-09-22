// src/lib/markdown.js
import { marked } from "marked";

export async function markdownToHtml(md = "") {
  marked.setOptions({ gfm: true, breaks: true });
  const html = marked.parse(md);
  return typeof html === "string" ? html : "";
}

