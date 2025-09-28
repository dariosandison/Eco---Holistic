// lib/mdx.js
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** 1) Strip HTML comments that MDX rejects */
function stripHtmlComments(input = '') {
  return input.replace(/<!--[\s\S]*?-->/g, '');
}

/**
 * 2) Normalize common inline HTML to MDX-safe text:
 *    - Convert <a href="...">text</a> -> [text](url)
 *    - Convert <br> / <br/> -> blank line
 *    - Remove remaining *lowercase* HTML tags (e.g., <strong>, <em>, <span>, etc.)
 *      while preserving *Uppercase* MDX components (<BuyBox>, <ProsCons>, etc.)
 */
function sanitizeHtmlToMarkdown(input = '') {
  let s = input;

  // <a href="url">text</a> -> [text](url)
  s = s.replace(
    /<a\s+[^>]*href=(['"])(.*?)\1[^>]*>([\s\S]*?)<\/a>/gi,
    (_m, _q, url, text) => `[${String(text).replace(/\s+/g, ' ').trim()}](${url})`
  );

  // <br>, <br/>, <br /> -> double newline
  s = s.replace(/<br\s*\/?>/gi, '\n\n');

  // Remove any remaining *lowercase* HTML tags (keep uppercase MDX components)
  // e.g., <strong>bold</strong> => bold   (content preserved, tag dropped)
  // Matches tags that start with a lowercase letter only.
  s = s.replace(/<\/?(?:[a-z][\w:-]*)(?:\s[^>]*?)?>/g, '');

  return s;
}

/** Main serializer used by pages */
export async function serializeMdx(content) {
  const safe = sanitizeHtmlToMarkdown(stripHtmlComments(content || ''));
  return serialize(safe, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }]
      ],
      development: false
    },
    parseFrontmatter: false
  });
}

/** Convert Date objects to ISO strings so Next can serialize props */
export function jsonSafeMeta(obj) {
  return JSON.parse(
    JSON.stringify(obj, (_k, v) => (v instanceof Date ? v.toISOString() : v))
  );
}
