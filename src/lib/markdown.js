// src/lib/markdown.js
import { marked } from "marked";

/**
 * Convert Markdown -> HTML for server/static rendering.
 * Safe to `await` even though it's sync.
 */
export function markdownToHtml(markdown = "") {
  // GitHub-flavored markdown + heading ids for deep links
  marked.setOptions({
    gfm: true,
    breaks: false,
    headerIds: true,
    mangle: false, // keep headings readable
  });

  return marked.parse(markdown || "");
}
