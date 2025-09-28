// lib/mdx.js
import { serialize } from 'next-mdx-remote/serialize';

/** 1) Strip HTML comments */
function stripHtmlComments(input = '') {
  return input.replace(/<!--[\s\S]*?-->/g, '');
}

/**
 * 2) Convert common HTML to MDX-safe Markdown/text, then
 *    aggressively remove any remaining HTML/JSX tags.
 *    Order matters: convert <a> and <br> BEFORE stripping tags.
 */
function sanitizeHtmlToMarkdown(input = '') {
  let s = String(input || '');

  // <a href="url">text</a> -> [text](url)
  s = s.replace(
    /<\s*a\s+[^>]*href=(['"])(.*?)\1[^>]*>([\s\S]*?)<\s*\/\s*a\s*>/gi,
    (_m, _q, url, text) => `[${String(text).replace(/\s+/g, ' ').trim()}](${url})`
  );

  // <br>, <br/>, <br /> -> double newline
  s = s.replace(/<\s*br\s*\/?\s*>/gi, '\n\n');

  // Remove React fragments explicitly
  s = s.replace(/<\s*>\s*/g, '');
  s = s.replace(/<\s*\/\s*>\s*/g, '');

  // Remove any other HTML/JSX tags (lowercase or UPPERCASE)
  // Examples matched: <strong>, </strong>, <BuyBox .../>, < Div >, etc.
  s = s.replace(/<[^>]+>/g, '');

  // Also handle stray closing tag markers like `</` left dangling
  s = s.replace(/<\/\s*[A-Za-z][\w:-]*\s*>/g, '');

  return s;
}

/** Main serializer */
export async function serializeMdx(content) {
  const safe = sanitizeHtmlToMarkdown(stripHtmlComments(content || ''));
  return serialize(safe, {
    mdxOptions: {
      // Keep EMPTY to avoid plugin API mismatches causing `this.getData` errors
      remarkPlugins: [],
      rehypePlugins: [],
      development: false
    },
    parseFrontmatter: false
  });
}

/** Ensure JSON-serializable meta (Dates -> ISO strings) */
export function jsonSafeMeta(obj) {
  return JSON.parse(
    JSON.stringify(obj, (_k, v) => (v instanceof Date ? v.toISOString() : v))
  );
}
