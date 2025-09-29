// lib/mdx.js
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/**
 * Serialize an MDX string for MDXRemote.
 * Returns { compiledSource, scope, frontmatter }.
 */
export async function serializeMdx(source, options = {}) {
  const {
    scope = {},
    mdxOptions = {},
    parseFrontmatter = true, // expose frontmatter to pages that use it
  } = options;

  const result = await serialize(source, {
    scope,
    parseFrontmatter,
    mdxOptions: {
      // Handle GitHub-flavored Markdown and both YAML + TOML front-matter
      remarkPlugins: [
        remarkGfm,
        [remarkFrontmatter, ['yaml', 'toml']],
        ...(mdxOptions.remarkPlugins || []),
      ],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        ...(mdxOptions.rehypePlugins || []),
      ],
      // MDX v2 format
      format: 'mdx',
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
