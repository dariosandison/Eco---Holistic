// lib/mdx.js
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

/**
 * Safely JSON-serializable frontmatter
 */
export function jsonSafeMeta(obj) {
  return JSON.parse(JSON.stringify(obj ?? {}));
}

/**
 * Strip HTML comments which MDX v2 does not accept (use {/* */} in authoring).
 */
function stripHtmlComments(input) {
  return input.replace(/<!--[\s\S]*?-->/g, '');
}

/**
 * Compile raw MDX string into an MDXRemote source + return sanitized frontmatter.
 * This version avoids external remark plugins (like `remark-frontmatter`) so it
 * won’t fail on Vercel if that package isn’t installed.
 */
export async function serializeMdx(raw) {
  const { content, data } = matter(raw ?? '');
  const cleaned = stripHtmlComments(content);

  const mdxSource = await serialize(cleaned, {
    // We parse frontmatter ourselves with gray-matter, so keep this false
    parseFrontmatter: false,
    mdxOptions: {
      // Keep it plugin-light to minimize install issues
      remarkPlugins: [],
      rehypePlugins: [],
      format: 'mdx',
    },
  });

  return { mdxSource, meta: jsonSafeMeta(data) };
}
