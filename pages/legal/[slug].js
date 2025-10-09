import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote";
import { serializeMdx, jsonSafeMeta } from "@/lib/mdx";
import mdxComponents from "@/components/mdx-components";

export default function LegalDoc({ mdxSource, meta }) {
  return (
    <article className="prose prose-invert">
      <h1>{meta.title || "Legal"}</h1>
      <MDXRemote {...mdxSource} components={mdxComponents} />
    </article>
  );
}

export async function getStaticPaths() {
  const dir = path.join(process.cwd(), "content", "legal");
  const slugs = fs.existsSync(dir)
    ? fs.readdirSync(dir).filter(f => /\.mdx?$/.test(f)).map(f => f.replace(/\.mdx?$/, ""))
    : [];
  return { paths: slugs.map(slug => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const file =
    fs.existsSync(path.join(process.cwd(), "content", "legal", `${params.slug}.mdx`))
      ? path.join(process.cwd(), "content", "legal", `${params.slug}.mdx`)
      : path.join(process.cwd(), "content", "legal", `${params.slug}.md`);
  const src = fs.readFileSync(file, "utf8");
  const mdxSource = await serializeMdx(src);
  const meta = jsonSafeMeta(mdxSource.frontmatter || {});
  return { props: { mdxSource, meta } };
}
