import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import NewsletterBar from "../../components/NewsletterBar";

const CONTENT_DIR = path.join(process.cwd(), "content", "guides");

/* ----------------------------- MDX utilities ----------------------------- */

function cleanMdx(src) {
  if (!src) return src;
  let s = String(src);

  // Remove HTML comments
  s = s.replace(/<!--[\s\S]*?-->/g, "");

  // Convert <https://...> to Markdown link
  s = s.replace(/<((https?:\/\/)[^>\s]+)>/g, (_m, url) => `[${url}](${url})`);

  // Neutralize a couple of stray component tags if they sneak in
  ["Thing", "Audience"].forEach((name) => {
    s = s.replace(new RegExp(`<\\s*${name}\\b([^>]*)\\/\\s*>`, "g"), `<span$1></span>`);
    s = s.replace(
      new RegExp(`<\\s*${name}\\b([^>]*)>([\\s\\S]*?)<\\s*\\/\\s*${name}\\s*>`, "g"),
      `<span$1>$2</span>`
    );
  });

  return s;
}

function listSlugs() {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

function loadFile(slug) {
  const full = path.join(CONTENT_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(full, "utf8");
  const { content, data } = matter(raw);
  return { content, meta: data || {} };
}

/* ------------------------------- Components ------------------------------ */

// Safe external links + fixes accidental .mdx links authored in content
function SafeLink(props) {
  let { href = "", children, ...rest } = props;
  const isExternal = /^https?:\/\//i.test(href);

  if (/\.mdx(\?|#|$)/i.test(href)) {
    const lower = href.toLowerCase();
    if (lower.includes("privacy")) href = "/privacy";
    else if (lower.includes("cookies")) href = "/cookies";
    else if (lower.includes("terms")) href = "/terms";
    else if (lower.includes("disclaimer")) href = "/disclaimer";
    else if (lower.includes("affiliate")) href = "/affiliate-disclosure";
    else if (lower.includes("editorial")) href = "/editorial-policy";
    else if (lower.includes("how-we-test")) href = "/how-we-test";
    else if (lower.includes("product-disclosure")) href = "/product-disclosure";
    else href = href.replace(/^.*?pages\//, "/").replace(/\.mdx$/i, "");
  }

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "nofollow sponsored noopener noreferrer" : undefined}
      {...rest}
    >
      {children ?? href}
    </a>
  );
}

// Minimal affiliate link that always sets safe rel/target
function AffiliateLink({ href = "", children, ...rest }) {
  const isExternal = /^https?:\/\//i.test(href);
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "nofollow sponsored noopener noreferrer" : undefined}
      {...rest}
    >
      {children || "View product"}
    </a>
  );
}

// Very forgiving table component so the MDX demo page can render in SSG
function ComparisonTable({ columns = [], rows = [], children }) {
  // If MDX authors provided their own table markup as children, just wrap it.
  if (children) {
    return (
      <div style={{ overflowX: "auto" }}>
        <table>
          {children}
        </table>
      </div>
    );
  }

  // Otherwise try to render from simple arrays/objects.
  const cols = Array.isArray(columns) ? columns : [];
  const data = Array.isArray(rows) ? rows : [];

  // Support rows as arrays OR array of objects keyed by column id/name
  const getCell = (row, idx) => {
    if (Array.isArray(row)) return row[idx];
    if (row && typeof row === "object") {
      const key = cols[idx]?.key ?? cols[idx]?.id ?? cols[idx]?.name ?? cols[idx];
      return row[key];
    }
    return row;
  };

  return (
    <div style={{ overflowX: "auto" }}>
      <table>
        {cols.length > 0 && (
          <thead>
            <tr>
              {cols.map((c, i) => (
                <th key={i}>{c?.label ?? c?.name ?? String(c)}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {data.map((r, ri) => (
            <tr key={ri}>
