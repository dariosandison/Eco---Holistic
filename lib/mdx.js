// lib/mdx.js
// Minimal, robust MDX v3 serializer for next-mdx-remote.
// - Converts HTML comments <!-- --> to MDX-safe comments outside code fences
// - Rewrites angle-bracket autolinks <https://…> to plain URLs
// - No remark/rehype plugins (avoids “this.getData…” MDX pipeline issues)

import { serialize } from 'next-mdx-remote/serialize';

/** Run a replacer on lines that are NOT inside fenced code blocks. */
function fenceAwareTransform(source, replacer) {
  const lines = String(source).replace(/\r\n?/g, '\n').split('\n');
  let inFence = false;
  let fenceChar = null;
  let fenceLen = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const t = line.trim();
    const m = t.match(/^(`{3,}|~{3,})/);
    if (m) {
      const ch = m[1][0];
      const len = m[1].length;
      if (!inFence) {
        inFence = true; fenceChar = ch; fenceLen = len;
      } else if (ch === fenceChar && t.startsWith(ch.repeat(fenceLen))) {
        inFence = false; fenceChar = null; fenceLen = 0;
      }
      continue; // leave fence lines untouched
    }
    if (!inFence) lines[i] = replacer(line);
  }
  return lines.join('\n');
}

/** Convert HTML comments to MDX-safe comments outside fences. */
function convertHtmlCommentsToJsx(source) {
  return fenceAwareTransform(source, (line) =>
    line.replace(/<!--/g, '{/*').replace(/-->/g, '*/}')
  );
}

/** Convert <https://…> to https://… outside fences. */
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
      format: 'mdx'
    }
  });
}

export function jsonSafeMeta(meta) {
  try {
    return JSON.parse(JSON.stringify(meta ?? {}));
  } catch {
    return {};
  }
}

export default { serializeMdx, jsonSafeMeta };
