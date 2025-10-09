import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";

// --- preprocess to avoid MDX parse hiccups (comments, bare <https://…>) ---
function preprocess(src) {
  let s = src || "";
  s = s.replace(/<!--[\s\S]*?-->/g, "");
  s = s.replace(/<https?:\/\/[^>\s]+>/g, (m) => {
    const url = m.slice(1, -1);
    return `[${url}](${url})`;
  });
  return s;
}

export async function serializeMdx(source) {
  const cleaned = preprocess(source);
  return serialize(cleaned, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeRaw, rehypeSlug],
      format: "mdx"
    },
    parseFrontmatter: true
  });
}

export function jsonSafeMeta(meta) {
  const out = { ...meta };
  if (out?.date instanceof Date) out.date = out.date.toISOString();
  if (out?.date && typeof out.date === "string") {
    const d = new Date(out.date);
    if (!Number.isNaN(d.valueOf())) out.date = d.toISOString();
  }
  return out;
}

// Optional default export (harmless if unused)
export default { serializeMdx, jsonSafeMeta };
