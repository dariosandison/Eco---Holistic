// lib/mdx.js
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/**
 * Convert HTML comments <!-- ... --> to JSX comments {/* ... * /} in MDX source,
 * but ignore anything inside fenced code blocks (``` or ~~~).
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
 * Returns { compiledSource, scope, frontmatter }.
 */
export async function serializeMdx(source, options = {}) {
  const {
    scope = {},
    mdxOptions = {},
    parseFrontmatter = true,
  } = options;

  const prepared = convertHtmlCommentsToJsx(source);

  const result = await serialize(prepared, {
    scope,
    parseFrontmatter,
    mdxOptions: {
      remarkPlugins: [
        remarkGfm,
        [remarkFrontmatter, ['yaml', 'toml']],
        ...(mdxOptions.remarkPlugins || []),
      ],
      // Allow raw HTML in MDX (safe here since content is local and built at SSG time)
      rehypePlugins: [
        rehypeRaw,
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        ...(mdxOptions.rehypePlugins || []),
      ],
      format: 'mdx',
      development: false,
    },
  });

  return result;
}

/**
 * Make arbitrary meta/frontmatter JSON-safe for Next data props.
 */
export function jsonSafeMeta(meta) {
  try {
    return JSON.parse(JSON.stringify(meta ?? {}));
  } catch {
    return {};
  }
}

export default { serializeMdx, jsonSafeMeta };
