import { serialize } from "next-mdx-remote/serialize";

/**
 * Minimal, dependency-light MDX serialization.
 * (No rehype-autolink-headings to avoid npm registry/version issues.)
 */
export async function serializeMdx(source) {
  return serialize(source, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
      format: "mdx",
    },
    parseFrontmatter: false,
  });
}

/** Make front-matter safe for Next JSON serialization */
export function jsonSafeMeta(meta) {
  if (!meta || typeof meta !== "object") return {};
  const out = {};
  for (const [k, v] of Object.entries(meta)) {
    if (v instanceof Date) out[k] = v.toISOString();
    else if (v !== undefined) out[k] = v;
  }
  return out;
}
