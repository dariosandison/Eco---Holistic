// lib/mdx.js
// Shared MDX utilities used by blog / about / guides

import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

/**
 * Makes front-matter safe for Next.js data serialization:
 * - Dates -> ISO strings
 * - Removes non-JSON values
 */
export function jsonSafeMeta(meta = {}) {
  const out = {};
  for (const [k, v] of Object.entries(meta)) {
    if (v instanceof Date) {
      out[k] = v.toISOString();
    } else if (
      v === null ||
      ["string", "number", "boolean"].includes(typeof v) ||
      Array.isArray(v) ||
      (typeof v === "object" && v && v.constructor === Object)
    ) {
      out[k] = v;
    } else {
      // drop functions, class instances, etc.
      // (keeps Next from throwing during export)
    }
  }
  return out;
}

/**
 * Small, defensive cleanup before compiling MDX:
 * - strip HTML comments
 * - convert <https://…> into proper markdown links
 */
export function sanitizeMdxString(src = "") {
  let s = String(src);

  // remove HTML comments
  s = s.replace(/<!--[\s\S]*?-->/g, "");

  // <https://foo> -> [https://foo](https://foo)
  s = s.replace(/<https?:\/\/[^>\s]+>/g, (m) => {
    const url = m.slice(1, -1);
    return `[${url}](${url})`;
  });

  return s;
}

/**
 * Compile MDX to a source consumable by <MDXRemote />.
 * Keeps the same shape used by next-mdx-remote v4/5 (compiledSource + scope).
 */
export async function serializeMdx(source, { scope = {} } = {}) {
  const cleaned = sanitizeMdxString(source);
  const mdxSource = await serialize(cleaned, {
    scope,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "wrap",
            test: ["h2", "h3", "h4", "h5", "h6"],
            properties: { className: ["autolink"] },
          },
        ],
      ],
      format: "mdx",
    },
  });

  return mdxSource; // { compiledSource, scope, frontmatter? }
}
