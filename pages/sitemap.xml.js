// pages/sitemap.xml.js
export async function getServerSideProps({ res }) {
  const baseUrl = "https://www.wild-and-well.store";

  // List your static routes here. Add new pages as you create them.
  const routes = [
    "/",                 // homepage
    "/recommended",
    "/disclosure",
    "/privacy",
    "/cookies",
    // add blog post routes you have live, e.g.:
    // "/posts/mindful-morning-ritual",
    // "/posts/natural-calm-at-night",
  ];

  const lastmod = new Date().toISOString();

  const urls = routes
    .map(
      (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === "/" ? "1.0" : "0.7"}</priority>
  </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
  ${urls}
</urlset>`.trim();

  res.setHeader("Content-Type", "application/xml");
  res.write(xml);
  res.end();

  return { props: {} };
}

export default function SiteMap() {
  // getServerSideProps will send the XML
  return null;
}
