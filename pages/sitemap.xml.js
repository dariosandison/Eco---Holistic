export default function handler(req, res) {
  const baseUrl = "https://www.wild-and-well.store";

  // Add any important paths here
  const paths = ["", "posts"];

  const urls = paths
    .map(
      (p) => `
  <url>
    <loc>${baseUrl}/${p}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${p === "" ? "1.0" : "0.8"}</priority>
  </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`.trim();

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(xml);
}
