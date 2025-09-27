// lib/markdown.js
import { marked } from 'marked';

marked.setOptions({
  gfm: true,
  breaks: true,
  headerIds: true,
  mangle: false,
});

/** Robust Markdown → HTML */
export function renderMarkdown(md) {
  return marked.parse(md || '');
}

/** Drop a leading H1 from content to avoid duplicate titles */
export function stripLeadingH1(md) {
  if (!md) return '';
  return md.replace(/^# .*\n+/, '');
}
