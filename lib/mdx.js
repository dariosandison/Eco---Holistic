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
 *  - Remove lowercase HTML tags (with or without spaces after '<'),
 *    e.g. < strong >, </ em >, <div class="x">, etc.
 *  - Remove React fragments: <> and </>
 *  - Keep Uppercase MDX components (e.g. <BuyBox>, <ProsCons>)
 */
function sanitizeHtmlToMarkdown(input = '') {
  let s = input;

  // Links: <a href="url">text</a>  ->  [text](url)
  s = s.replace(
    /<\s*a\s+[^>]*href=(['"])(.*?)\1[^>]*>([\s\S]*?)<\s*\/\s*a\s*>/gi,
    (_m, _q, url, text) => `[${String(text).replace(/\s+/g, ' ').trim()}](${url})`
  );

  // Line breaks
  s = s.replace(/<\s*br\s*\/?\s*>/gi, '\n\n');

  // Remove React fragments
  s = s.replace(/<\s*>\s*/g, '');
  s = s.replace(/<\s*\/\s*>\s*/g, '');

  // Strip any remaining *lowercase* HTML tags (open or close), allowing whitespace after '<'
  // Examples matched: <strong>, </strong>, < div class="x" >, <img ... />, etc.
  s = s.replace(/<\s*\/?\s*[a-z][\w:-]*(?:\s[^>]*?)?>/g, '');

  return
