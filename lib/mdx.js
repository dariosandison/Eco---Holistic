// lib/mdx.js
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/**
 * Convert HTML comments <!-- ... --> (including spaced `< !--`)
 * to JSX comments {/* ... * /} outside of fenced code blocks.
 */
function convertHtmlCommentsToJsx(source) {
  const text = String(source).replace(/\r\n?/g, '\n');

  // Split by fenced code blocks to avoid touching them
  const parts = [];
  let i = 0;
  const fenceRe = /(^|\n)(`{3,}|~{3,}).*?\n[\s\S]*?\n\2(?=\n|$)/g;
  let m;

  while ((m = fenceRe.exec(text))) {
    if (m.index > i) parts.push({ code: false, s: text.slice(i, m.index) });
    parts.push({ code: true, s: m[0] });
    i = m.index + m[0].length;
  }
  if (i < text.length) parts.push({ code: false, s: text.slice(i) });

  // Replace comments only in non-code segments
  const replaced = parts
    .map((p) => {
      if (p.code) return p.s;
      // Replace multi-line HTML comments (allow optional spaces after `<` and before `--`)
      return p.s.replace(/<\s*!--([\s\S]*?)--\s*>/g, '{/*$1*/}');
    })
    .join('');

  return replaced;
}

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

export function jsonSafeMeta(meta) {
  try {
    return JSON.parse(JSON.stringify(meta ?? {}));
  } catch {
    return {};
  }
}

export default { serializeMdx, jsonSafeMeta };
