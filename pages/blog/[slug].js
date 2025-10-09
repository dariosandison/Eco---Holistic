import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote";
import { serializeMdx, jsonSafeMeta } from "../../lib/mdx";
import mdxComponents from "../../components/mdx-components";

export default function BlogPost({ source }) {
  return (
    <article className="prose max-w-3xl mx-auto py-10">
      <MDXRemote {...source} components={mdxComponents} />
    </article>
  );
}

export async function getStaticPaths() {
  const dir = path.join(process.cwd(), "content/blog");
  const slugs = (fs.existsSync(dir) ? fs.readdirSync(dir) : [])
    .filter(f => /\.(md|mdx)$/i.test(f))
    .map(f => ({ params: { slug: f.replace(/\.(md|mdx)$/i, "") } }));
  return { paths: slugs, fallback: false };
}

export async function getStaticProps({ params }) {
  const dir = path.join(process.cwd(), "content/blog");
  const file = [".mdx", ".md"].map(ext => path.join(dir, params.slug + ext))
    .find(p => fs.existsSync(p));
  const raw = fs.readFileSync(file, "utf8");
  const source = await serializeMdx(raw);
  source.frontmatter = jsonSafeMeta(source.frontmatter || {});
  return { props: { source } };
}
