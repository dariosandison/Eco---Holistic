// lib/md.js
// MDX v3 serializer for next-mdx-remote — same settings as lib/mdx.js.

import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';

function fenceAwareTransform(source, replacer) {
  const lines = String(source).replace(/\r\n?/g, '\n').split('\n');
  let inFence = false, fenceMarker = null, fenceLen = 0;
  const out = lines.map((line) => {
    const t = line.trim();
    const m = t.match(/^(`{3,}|~{3,})/);
    if (m) {
      const marker = m[1][0], len = m[1].length;
      if (!inFence) { inFence = true; fenceMarker = marker; fenceLen = len; }
      else if (marker === fenceMarker && t.startsWith(marker.repeat(fenceLen))) {
        inFence = false; fenceMarker = null; fenceLen = 0;
      }
      return line;
    }
    if (inFence) return line;
    return replacer(line);
  });
  return out.join('\n');
}

function convertHtmlCommentsToJsx(source) {
  return fenceAwareTransform(source, (line) =>
    line.replace(/<!--/g, '{/*').replace(/-->/g, '*/}')
  );
}

function convertAngleBracketAutolinks(source) {
  const re = /<(https?:\/\/[^>\s]+)>/g;
  return fenceAwareTransform(source, (line) => line.replace(re, (_m, url) => url));
}

export async function serializeMdx(source) {
  const s2 = convertAngleBracketAutolinks(convertHtmlCommentsToJsx(String(source)));
  return serialize(s2, {
    parseFrontmatter: true,
    mdxOptions: {
      format: 'mdx',
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
    },
  });
}

export function jsonSafeMeta(meta) {
  try { return JSON.parse(JSON.stringify(meta ?? {})); }
  catch { return {}; }
}

export default { serializeMdx, jsonSafeMeta };
