export async function getServerSideProps({ res }) {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";
  const body = `User-agent: *
Allow: /

Sitemap: ${site}/sitemap.xml
`;
  res.setHeader("Content-Type", "text/plain");
  res.write(body);
  res.end();
  return { props: {} };
}

export default function Robots() { return null; }

