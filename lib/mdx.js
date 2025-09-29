// lib/mdx.js
// Lightweight MDX serializer with frontmatter support and a guard
// that neutralizes "!!!" admonition lines so MDX can compile.
import { serialize } from 'next-mdx-remote/serialize';

/**
 * Replace any line that starts with "!!!" (MkDocs-style admonitions)
 * with an MDX comment so compilation doesn't fail.
 */
function neutralizeAdmonitions(input) {
  return input
    .split('\n')
    .map((line) => (line.trimStart().startsWith('!!!') ? `{/* ${line} */}` : line))
    .join('\n');
}

/**
 * Serialize MDX (with built-in frontmatter parsing).
 */
export async function serializeMdx(source) {
  const cleaned = neutralizeAdmonitions(source || '');
  return serialize(cleaned, {
    parseFrontmatter: true, // avoids needing 'remark-frontmatter'
    mdxOptions: {
      format: 'mdx',
      // Add remark/rehype plugins here later if needed.
    },
  });
}

/**
 * Make an object JSON-serializable (for pageProps).
 */
export function jsonSafeMeta(meta) {
  try {
    return JSON.parse(JSON.stringify(meta ?? {}));
  } catch {
    return {};
  }
}
