import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

const LEGAL_DIR = path.join(process.cwd(), "content", "legal");

// ----------------------------- Helpers -------------------------------------

function getAllSlugs(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

function loadBySlug(dir, slug) {
  const filePathMDX = path.join(dir, `${slug}.mdx`);
  const filePathMD = path.join(dir, `${slug}.md`);
  const filePath = fs.existsSync(filePathMDX) ? filePathMDX : filePathMD;

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(raw);
  return { content, meta: data || {} };
}

function titleFromSlug(slug) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function jsonSafeMeta(meta) {
  const out = {};
  for (const [k, v] of Object.entries(meta || {})) {
    if (v instanceof Date) out[k] = v.toISOString();
    else out[k] = v;
  }
  return out;
}

function sanitizeMDX(src) {
  if (!src) return src;

  const codeBlocks = [];
  let lifted = src.replace(/```[\s\S]*?```/g, (m) => {
    const i = codeBlocks.push(m) - 1;
    return `@@CODEBLOCK_${i}@@`;
  });
  lifted = lifted.replace(/`[^`\n]+`/g, (m) => {
    const i = codeBlocks.push(m) - 1;
    return `@@CODEBLOCK_${i}@@`;
  });

  // Remove HTML comments and any <! ... > declarations
  let cleaned = lifted
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<![\s\S]*?>/g, "");

  // Remove bare {UppercaseIdentifier}
  cleaned = cleaned.replace(/\{[ \t]*[A-Z][A-Za-z0-9_]*[ \t]*\}/g, "");

  // Guard against specific unknown components seen in logs
  ["Thing", "Audience"].forEach((name) => {
    const reSelf = new RegExp(`<${name}\\b([^>]*)\\/\\>`, "g");
    cleaned = cleaned.replace(reSelf, `<div$1 />`);
    const reOpen = new RegExp(`<${name}\\b([^>]*)>`, "g");
    cleaned = cleaned.replace(reOpen, `<div$1>`);
    const reClose = new RegExp(`</${name}>`, "g");
    cleaned = cleaned.replace(reClose, `</div>`);
  });

  // Restore code blocks
  cleaned = cleaned.replace(/@@CODEBLOCK_(\d+)@@/g, (_, i) => codeBlocks[Number(i)]);

  return cleaned;
}

function withFallback(base = {}) {
  return new Proxy(base, {
    get(target, prop) {
      if (prop in target) return target[prop];
      if (typeof prop === "string" && /^[A-Z]/.test(prop)) {
        return (props) => <div {...props} />;
      }
      return undefined;
    },
  });
}

// ------------------------------- Page --------------------------------------

export default function LegalPage({ slug, meta, mdxSource }) {
  const components = withFallback({});

  const pageTitle = meta?.title || titleFromSlug(slug);
  const pageDesc = meta?.description || "";

  return (
    <>
      <Head>
        <title>{pageTitle} | Wild &amp; Well</title>
        {pageDesc ? <meta name="description" content={pageDesc} /> : null}
      </Head>

      <div className="container">
        <article className="post">
          <header className="post-header">
            <h1>{pageTitle}</h1>
          </header>

          <div className="post-content">
            <MDXRemote {...mdxSource} components={components} />
          </div>
        </article>
      </div>
    </>
  );
}

// ------------------------------ Data ---------------------------------------

export async
