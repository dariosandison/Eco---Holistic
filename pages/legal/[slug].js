// pages/legal/[slug].js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from "react";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

// keep styles consistent & avoid MDX crashes
function sanitizeMdxSource(raw) {
  let s = String(raw);
  s = s.replace(/<!--[\s\S]*?-->/g, "");
  s = s.replace(/<((?:https?:\/\/)[^>\s]+)>/g, (_m, url) => `[${url}](${url})`);
  s = s.replace(/\r\n/g, "\n").replace(/\n{3,}/g, "\n\n");
  return s.trim();
}

// harmless fallback so unknown Capitalized nodes don’t explode builds
const COMPONENTS = new Proxy(
  {},
  {
    get(_t, prop) {
      if (typeof prop === "string" && /^[A-Z]/.test(prop)) {
        // eslint-disable-next-line react/display-name
        return (p) => <div {...p} />;
      }
      return undefined;
    },
  }
);

export default function LegalPage({ mdxSource, meta }) {
  return (
    <>
      <SiteHeader />
      <main className="container content">
        <article className="post">
          <header className="post-header">
            {meta.title && <h1>{meta.title}</h1>}
          </header>

          <div className="mdx">
            <MDXRemote {...mdxSource} components={COMPONENTS} />
          </div>
        </article>
      </main>
      <SiteFooter />
      <style jsx global>{`
        :root {
          --olive-900: #2f3c27;
          --cream-100: #f2ead7;
        }
        body {
          background: var(--olive-900);
          color: var(--cream-100);
        }
        .content {
          color: var(--cream-100);
        }
        .mdx a {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}

const LEGAL_DIR = path.join(process.cwd(), "content", "legal");

export async function getStaticPaths() {
  if (!fs.existsSync(LEGAL_DIR)) {
    return { paths: [], fallback: false };
  }

  const files = fs
    .readdirSync(LEGAL_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  const paths = files.map((f) => ({
    params: { slug: f.replace(/\.mdx?$/, "") },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const fileBase = path.join(LEGAL_DIR, params.slug);
  const mdPath = fs.existsSync(fileBase + ".mdx")
    ? fileBase + ".mdx"
    : fs.existsSync(fileBase + ".md")
    ? fileBase + ".md"
    : null;

  if (!mdPath) return { notFound: true };

  const file = fs.readFileSync(mdPath, "utf8");
  const { content, data } = matter(file);
  const safe = sanitizeMdxSource(content);

  const mdxSource = await serialize(safe, {
    parseFrontmatter: false,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "append",
            properties: { className: ["anchor"] },
          },
        ],
      ],
      development: false,
    },
  });

  const meta = {
    ...data,
    date: data?.date ? new Date(data.date).toISOString() : null,
    slug: params.slug,
  };

  return {
    props: { mdxSource, meta },
  };
}
