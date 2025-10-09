import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote";
import { serializeMdx, jsonSafeMeta } from "@/lib/mdx";
import { mdxComponents } from "@/components/MDXComponents";

export default function ComparePage({ mdxSource, meta }) {
  return (
    <article className="prose prose-invert">
      <h1>{meta.title || "Comparison"}</h1>
      <MDXRemote {...mdxSource} components={mdxComponents} />
    </article>
  );
}

export async function getStaticPaths() {
  const dir = path.join(process.cwd(), "content", "compare");
  const slugs = fs.existsSync(dir)
    ? fs.readdirSync(dir).filter(f => /\.mdx?$/.test(f)).map(f => f.replace(/\.mdx?$/, ""))
    : [];
  return { paths: slugs.map(slug => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const base = path.join(process.cwd(), "content", "compare");
  const file = fs.existsSync(path.join(base, `${params.slug}.mdx`))
    ? path.join(base, `${params.slug}.mdx`)
    : path.join(base, `${params.slug}.md`);
  const src = fs.readFileSync(file, "utf8");
  const mdxSource = await serializeMdx(src);
  const meta = jsonSafeMeta(mdxSource.frontmatter || {});
  return { props: { mdxSource, meta } };
}
