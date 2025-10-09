import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote";
import { serializeMdx, jsonSafeMeta } from "@/lib/mdx";
import { mdxComponents } from "@/components/MDXComponents";

export default function AboutPage({ mdxSource, meta }) {
  return (
    <article className="prose prose-invert">
      <h1>{meta.title || "About Wild & Well"}</h1>
      {meta.description && <p className="text-cream/80">{meta.description}</p>}
      <MDXRemote {...mdxSource} components={mdxComponents} />
    </article>
  );
}

export async function getStaticProps() {
  const root = process.cwd();
  const mdxFile = path.join(root, "content", "about.mdx");
  const mdFile = path.join(root, "content", "about.md");

  let src;
  if (fs.existsSync(mdxFile)) src = fs.readFileSync(mdxFile, "utf8");
  else if (fs.existsSync(mdFile)) src = fs.readFileSync(mdFile, "utf8");
  else {
    // Safe fallback if no file is present
    src = `---
title: About Wild & Well
description: Practical wellness & eco choices.
---

We publish simple, trustworthy guides to help you live **wild & well**.`;
  }

  const mdxSource = await serializeMdx(src);
  const meta = jsonSafeMeta(mdxSource.frontmatter || {});
  return { props: { mdxSource, meta } };
}
