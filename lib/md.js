// lib/mdx.js
// Robust MDX serializer for next-mdx-remote (MDX v3).
// - Converts HTML comments (<!-- -->) to JSX comments {/* */} outside code fences
// - Enables GFM (tables, strikethrough, autolinks, task lists)
// - Allows raw HTML via rehype-raw
// - Adds heading slugs and clickable anchors

import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/**
 * Convert HTML comments <!-- ... --> to JSX comments {/* ... */} in MDX source,
 * while ignoring fenced code blocks (``` or ~~~).
 */
function convertHtmlCommentsToJsx(source) {
  const lines = String(source).replace(/\r\n?/g, '\n').split('\n');
  let inFence = false;
  let fenceMarker = null; // '`' or '~'
  let fenceLen = 0;

  return lines
    .map((line) => {
      const trimmed = line.trim();

      // Enter/exit fenced code blocks
      const m = trimmed.match(/^(`{3,}|~{3,})/);
      if (m) {
        const marker = m[1][0];
        const len = m[1].length;
        if (!inFence) {
          inFence = true;
          fenceMarker = marker;
          fenceLen = len;
        } else if (marker === fenceMarker && trimmed.startsWith(marker.repeat(fenceLen))) {
          inFence = false;
          fenceMarker = null;
          fenceLen = 0;
        }
        return line; // do not modify fence lines
      }

      if (inFence) return line;

      // Replace HTML comments outside code fences
      return line.replace(/<!--/g, '{/*').replace(/-->/g, '*/}');
    })
    .join('\n');
}

/**
 * Serialize an MDX string for MDXRemote.
 * Returns the object you can pass directly to <MDXRemote {...mdxSource} />.
 */
export async function serializeMdx(source) {
  const normalized = convertHtmlCommentsToJsx(String(source));

  const result = await serialize(normalized, {
    parseFrontmatter: true,
    mdxOptions: {
      // MDX v3
      format: 'mdx',
      development: false,
      remarkPlugins: [remarkFrontmatter, remarkGfm],
      rehypePlugins: [
        rehypeRaw, // allow raw HTML in markdown
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      ],
    },
  });

  return result;
}

/** Make arbitrary meta/frontmatter JSON-safe for Next data props. */
export function jsonSafeMeta(meta) {
  try {
    return JSON.parse(JSON.stringify(meta ?? {}));
  } catch {
    return {};
  }
}

export default { serializeMdx, jsonSafeMeta };
