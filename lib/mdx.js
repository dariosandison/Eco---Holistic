// lib/mdx.js
// Minimal, robust MDX v3 serializer for next-mdx-remote.
// - Converts HTML comments (<!-- -->) into MDX-safe comments outside code fences
// - Rewrites angle-bracket autolinks <https://…> to plain URLs (so they still render as links)
// - Uses NO remark/rehype plugins (avoids version/compat errors like "this.getData is not a function")

import { serialize } from 'next-mdx-remote/serialize';

/** Run a replacer on lines that are NOT inside fenced code blocks. */
function fenceAwareTransform(source, replacer) {
  const lines = String(source).replace(/\r\n?/g, '\n').split('\n');
  let inFence = false;
  let fenceMarker = null; // '`' or '~'
  let fenceLen = 0;

  const out = lines.map((line) => {
    const t = line.trim();
    const m = t.match(/^(`{3,}|~{3,})/);
    if (m) {
      const marker = m[1][0];
      const len = m[1].length;
      if (!inFence) {
        inFence = true; fenceMarker = marker; fenceLen = len;
      } else if (marker === fenceMarker && t.startsWith(marker.repeat(fenceLen))) {
        inFence = false; fenceMarker = null; fenceLen = 0;
      }
      return line;
    }
    if (inFence) return line;
    return replacer(line);
  });
  return out.join('\n');
}

/** Convert HTML comments to MDX-safe comments outside fences. */
function convertHtmlCommentsToJsx(source) {
  return fenceAwareTransform(source, (line) =>
    line.replace(/<!--/g, '{/*').replace(/-->/g, '*/}')
  );
}

/** Convert <https://…> to https://… outside fences (so it still renders fine). */
function convertAngleBracketAutolinks(source) {
  const re = /<(https?:\/\/[^>\s]+)>/g;
  return fenceAwareTransform(source, (line) => line.replace(re, (_m, url) => url));
}

export async function serializeMdx(source) {
  const s0 = String(source);
  const s1 = convertHtmlCommentsToJsx(s0);
  const s2 = convertAngleBracketAutolinks(s1);

  return serialize(s2, {
    parseFrontmatter: true,
    mdxOptions: {
      format: 'mdx',
      // Intentionally no remark/rehype plugins to avoid MDX node compatibility issues.
    },
