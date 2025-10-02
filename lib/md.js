// lib/md.js
// Mirrors lib/mdx.js with the same ultra-minimal settings.

import { serialize } from 'next-mdx-remote/serialize';

function fenceAwareTransform(source, replacer) {
  const lines = String(source).replace(/\r\n?/g, '\n').split('\n');
  let inFence = false, fenceChar = null, fenceLen = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const t = line.trim();
    const m = t.match(/^(`{3,}|~{3,})/);
    if (m) {
      const ch = m[1][0], len = m[1].length;
      if (!inFence) { inFence = true; fenceChar = ch; fenceLen = len; }
      else if (ch === fenceChar && t.startsWith(ch.repeat(fenceLen))) {
        inFence = false; fenceChar = null; fenceLen = 0;
      }
      continue;
    }
    if (!inFence) lines[i] = replacer(line);
  }
  return lines.join('\n');
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
      format: 'mdx'
    }
  });
}

export function jsonSafeMeta(meta) {
  try { return JSON.parse(JSON.stringify(meta ?? {})); }
  catch { return {}; }
}

export default { serializeMdx, jsonSafeMeta };
