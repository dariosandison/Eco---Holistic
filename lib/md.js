// lib/md.js
// Unified MDX serializer for next-mdx-remote (MDX v3).
// - Converts HTML comments (<!-- -->) to JSX comments {/* */} outside code fences
// - Converts angle-bracket autolinks <https://...> into plain URLs (GFM autolink)
// - Enables GFM (tables, strikethrough, autolinks, task lists)
// - Allows raw HTML via rehype-raw
// - Adds heading slugs and clickable anchors

import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** Track fenced code blocks so we don't transform inside them. */
function fenceAwareTransform(source, replacer) {
  const lines = String(source).replace(/\r\n?/g, '\n').split('\n');
  let inFence = false;
  let fenceMarker = null; // '`' or '~'
  let fenceLen = 0;

  const out = lines.map((line) => {
    const trimmed = line.trim();
    // Enter/exit fences
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
      return line;
    }
    if (inFence) return line;
    return replacer(line);
  });
  return out.join('\n');
}

/** Convert HTML comments to JSX comments outside code fences. */
function convertHtmlCommentsToJsx(source) {
  return fenceAwareTransform(source, (line) =>
    line.replace(/<!--/g, '{/*').replace(/-->/g, '*/}')
  );
}

/** Convert angle-bracket autolinks <https://...> into plain URLs outside code fences. */
function convertAngleBracketAutolinks(source) {
  const re = /<(https?:\/\/[^>\s]+)>/g;
  return fenceAwareTransform(source, (line) => line.replace(re, (_m, url) => url));
}

export async function serializeMdx(source) {
  const s0 = String(source);
  const s1 = convertHtmlCommentsToJsx(s0);
  const s2 = convertAngleBracketAutolinks(s1);

  const result = await serialize(s2, {
    parseFrontmatter: true,
    mdxOptions: {
      format: 'mdx',
      development: false,
      remarkPlugins: [remarkFrontmatter, remarkGfm],
      rehypePlugins: [
        rehypeRaw,
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      ],
    },
  });

  return result;
}

/** JSON-safe copy of arbitrary meta/frontmatter. */
export function jsonSafeMeta(meta) {
  try {
    return JSON.parse(JSON.stringify(meta ?? {}));
  } catch {
    return {};
  }
}

export default { serializeMdx, jsonSafeMeta };
