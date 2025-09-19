import path from "path";

export async function getServerSideProps({ res }) {
  const { promises: fs } = await import("fs");
  const postsDir = path.join(process.cwd(), "content", "posts");
  let files = [];
  try { files = await fs.readdir(postsDir); } catch { files = []; }
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";

  const postUrls = files
    .filter(f => f.endsWith(".md"))
    .map(f => `<url><loc>${site}/posts/${f.replace(/\.md$/, "")}</loc></url>`)
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>${site}/</loc></url>
    <url><loc>${site}/blog</loc></url>
    <url><loc>${site}/about</loc></url>
    <url><loc>${site}/deals</loc></url>
    ${postUrls}
  </urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.write(xml);
  res.end();

  return { props: {} };
}

export default function SiteMap() { return null; }

