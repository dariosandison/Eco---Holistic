// lib/mdx.js
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/**
 * Some legacy Markdown includes raw HTML (<strong>, <div>, <img />, etc.)
 * MDX v2/v3 is strict about raw HTML unless using rehype-raw (which MDX warns against).
 * We strip lowercase HTML tags to keep content rendering and avoid compile errors.
 * MDX Components (capitalized) like <Callout /> are preserved.
 */
function stripRawHtmlLowercase(source) {
  let s = String(source || '');

  // Remove inline/flow lowercase HTML tags while preserving inner text.
  // Examples matched: <strong>, </strong>, <div class="x">, <img ... />, etc.
  s = s.replace(/<\s*\/?\s*[a-z][\w:-]*(?:\s[^>]*?)?>/g, '');

  return s;
}

/**
 * Compile MDX safely for use with next-mdx-remote.
 */
export async function serializeMDX(source) {
  const safe = stripRawHtmlLowercase(source);

  return serialize(safe, {
    parseFrontmatter: false,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      // Intentionally NOT using rehype-raw to avoid MDX warnings/errors
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'append',
            properties: { className: ['anchor'] },
          },
        ],
      ],
      format: 'mdx',
    },
  });
}
