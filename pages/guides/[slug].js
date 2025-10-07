// pages/guides/[slug].js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from "react";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

// remark/rehype
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// Site chrome
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import NewsletterBar from "../../components/NewsletterBar";

// ---------- Helpers ----------

// Clean up MDX source so deployment never trips on odd chars/comments.
// - Strip HTML comments <!-- ... -->
// - Convert angle-bracket autolinks <https://...> → [link](https://...)
// - Trim stray backticks and normalize blank lines
function sanitizeMdxSource(raw) {
  let s = String(raw);

  // remove HTML comments
  s = s.replace(/<!--[\s\S]*?-->/g, "");

  // convert <https://...> or <http://...> to markdown link
  s = s.replace(/<((?:https?:\/\/)[^>\s]+)>/g, (_m, url) => `[${url}](${url})`);

  // normalize windows CRLF and collapse extra blank lines
  s = s.replace(/\r\n/g, "\n").replace(/\n{3,}/g, "\n\n");

  return s.trim();
}

// An affiliate link helper that “just works” in MDX: <AffiliateLink asin="B000123" label="Buy"/>
function AffiliateLink(props) {
  const {
    href,
    asin,
    label,
    children,
    tag = process.env.NEXT_PUBLIC_AMAZON_TAG || "wildandwell-20",
    domain = "www.amazon.com",
    ...rest
  } = props;

  const url =
    href ||
    (asin ? `https://${domain}/dp/${encodeURIComponent(asin)}?tag=${encodeURIComponent(tag)}` : "#");

  return (
    <a
      href={url}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      className="affiliate-link"
      {...rest}
    >
      {children || label || "View on Amazon"}
    </a>
  );
}

// A very forgiving ComparisonTable so the example MDX can render without errors.
function ComparisonTable({ headers = [], rows = [], children }) {
  if (children) {
    // If the MDX author provided a normal Markdown table, just render it.
    return <div className="comparison-table">{children}</div>;
  }
  if (!Array.isArray(headers) || !Array.isArray(rows) || !headers.length) {
    return null;
  }
  return (
    <div className="comparison-table">
      <table>
        <thead>
          <tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri}>{r.map((c, ci) => <td key={ci}>{c}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Components map for MDX, with a safe fallback for any unknown Capitalized tag
const COMPONENTS = new Proxy(
  {
    AffiliateLink,
    ComparisonTable,
  },
  {
    get(target, prop) {
      if (prop in target) return target[prop];
      // If MDX references a Capitalized component we don’t know (e.g., Thing, Audience),
      // render it as
