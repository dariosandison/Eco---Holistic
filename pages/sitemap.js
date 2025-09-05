// pages/sitemap.js

export async function getServerSideProps({ res }) {
  const baseUrl = "https://www.wild-and-well.store";

  const staticPages = ["", "/about", "/blog"];

  // Import posts dynamically
  const fs = require("fs");
  const path = require("path");
  const postsDirectory = path.join(process.cwd(), "content/posts");
  const postFiles = fs.readdirSync(postsDirectory);

  const posts = postFiles.map((file) => {
    const slug = file.replace(/\.md$/, "");
    return `/posts/${slug}`;
  });

  const allPages = [...staticPages, ...posts];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allPages
      .map((url) => {
        return `
        <url>
          <loc>${baseUrl}${url}</loc>
          <priority>${url === "" ? "1.0" : "0.8"}</priority>
        </url>
        `;
      })
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  // No UI, sitemap is served as XML
  return null;
}
module.exports = {
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/sitemap',
      },
    ];
  },
};
