// pages/sitemap.js
export async function getServerSideProps({ res }) {
  const baseUrl = "https://www.wild-and-well.store";

  // Define your static pages
  const staticPages = ["", "/about", "/blog"];

  // For now we’ll keep posts static. Later we can make it dynamic by reading from /content/posts.
  const posts = [
    "/posts/eco-friendly-home-habits",
    "/posts/herbal-teas-holistic-healing",
    "/posts/natural-remedies-beginners"
  ];

  const allPages = [...staticPages, ...posts];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map((url) => {
      return `
    <url>
      <loc>${baseUrl}${url}</loc>
      <priority>${url === "" ? "1.0" : "0.8"}</priority>
    </url>`;
    })
    .join("")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function Sitemap() {
  return null;
}
