export default function handler(req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(
`User-agent: *
Allow: /

Sitemap: https://www.wild-and-well.store/sitemap.xml`
  );
}
