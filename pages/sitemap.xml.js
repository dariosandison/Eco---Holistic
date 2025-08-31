import { getAllPosts } from "../lib/posts";

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://www.wild-and-well.store/</loc>
     </url>
     ${posts
       .map(post => {
         return `
       <url>
           <loc>https://www.wild-and-well.store/posts/${post.slug}</loc>
           <lastmod>${post.date}</lastmod>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

export async function getServerSideProps({ res }) {
  const posts = getAllPosts();

  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function SiteMap() {
  return null;
}
