// lib/mdx.js
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

/**
 * Remove constructs that frequently crash MDX/Acorn during static export
 * without changing the meaning for readers.
 */
export function sanitiseMdx(source) {
  let s = source ?? "";

  // Strip HTML comments
  s = s.replace(/<!--[\s\S]*?-->/g, "");

  // Convert angle-bracket URLs to markdown links: <https://x> -> [https://x](https://x)
  s = s.replace(/<\s*(https?:\/\/[^ >]+)\s*>/g, (_, url) => `[${url}](${url})`);

  // Self-close bare <br> tags
  s = s.replace(/<br(?!\s*\/)>/g, "<br />");

  // Avoid accidental JSX parsing for capitalised unknown tags by converting
  // e.g. <Thing ...> to <span data-unk="Thing" ...>
  // We only touch tags that have no namespace and start with capital letter.
  s = s.replace(/<([A-Z][A-Za-z0-9]*)\b/g, "<$1 data-unk=\"$1\"");

  return s;
}

export async function serializeMdxString(source) {
  const mdx = await serialize(sanitiseMdx(source), {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
      ],
      development: false,
    },
    parseFrontmatter: false,
  });
  return mdx;
}
