// lib/mdx.js
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** Remove raw HTML comments that MDX v2 rejects */
function stripHtmlComments(input = '') {
  return input.replace(/<!--[\s\S]*?-->/g, '');
}

/**
 * Some content mixes HTML (e.g., <br/>, <a>, closing tags).
 * rehypeRaw tells MDX to treat that HTML as HTML (not JSX) safely during build.
 */
export async function serializeMdx(content) {
  const safe = stripHtmlComments(content || '');
  return serialize(safe, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      // rehypeRaw MUST come before other rehype plugins
      rehypePlugins: [
        rehypeRaw,
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
