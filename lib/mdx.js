// lib/mdx.js
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';

/** Remove raw HTML comments */
function stripHtmlComments(input = '') {
  return input.replace(/<!--[\s\S]*?-->/g, '');
}

/**
 * Convert problematic HTML to MDX-safe Markdown/text:
 *  - <a href="...">text</a>  ->  [text](...)
 *  - <br>, <br/>, <br />     ->  blank line
 *  - Remove lowercase HTML tags (even with spaces after '<'), e.g. <strong>, </ em >, <div class="x">
 *  - Remove React fragments: <> and </>
 *  - Keep UPPERCASE MDX components (e.g. <BuyBox>) by only stripping tags starting with lowercase
 */
function sanitizeHtmlToMarkdown(input = '') {
  let s = String(input || '');

  // Links: <a href="url">text</a> -> [text](url)
  s = s.replace(
    /<\s*a\s+[^>]*href=(['"])(.*?)\1[^>]*>([\s\S]*?)<\s*\/\s*a\s*>/gi,
    function (_m, _q, url, text) {
      const label = String(text).replace(/\s+/g, ' ').trim();
      return '[' + label + '](' + url + ')';
    }
  );

  // <br>, <br/>, <br /> -> double newline
  s = s.replace(/<\s*br\s*\/?\s*>/gi, '\n\n');

  // Remove React fragments
  s = s.replace(/<\s*>\s*/g, '');
  s = s.replace(/<\s*\/\s*>\s*/g, '');

  // Remove any remaining *lowercase* HTML tags (keep Uppercase MDX components)
  // Examples matched: <strong>, </strong>, < div class="x" >, <img ... />, etc.
  s = s.replace(/<\s*\/?\s*[a-z][\w:-]*(?:\s[^>]*?)?>/g, '');

  return s;
}

export async function serializeMdx(content) {
  const safe = sanitizeHtmlToMarkdown(stripHtmlComments(content || ''));
  return serialize(safe, {
    mdxOptions: {
      // Minimal pipeline to avoid rehype/plugin API mismatches
      remarkPlugins: [remarkGfm],
      development: false
    },
    parseFrontmatter: false
  });
}

/** Ensure JSON-serializable meta (Dates -> ISO strings) */
export function jsonSafeMeta(obj) {
  return JSON.parse(
    JSON.stringify(obj, function (_k, v) {
      return v instanceof Date ? v.toISOString() : v;
    })
  );
}
