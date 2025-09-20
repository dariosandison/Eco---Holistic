import Link from "next/link";
import SEO from "../components/SEO";

export default function Blog() {
  const posts = [
    {
      title: "Vitamins & Minerals (Minimal Additives)",
      href: "/guides/vitamin-supplements",
      date: "2025-01-01",
      excerpt:
        "Clean-label essentials—short ingredient lists, transparent excipients, and smart forms.",
    },
    {
      title: "Protein Supplements (Natural Ingredients)",
      href: "/guides/protein-supplements",
      date: "2025-01-01",
      excerpt:
        "Unflavoured whey, vegan blends, collagen, and more—chosen for minimal additives.",
    },
  ];

  return (
    <>
      <SEO title="Blog" path="/blog" />
      <main className="container">
        <h1>Blog</h1>
        <p className="intro">
          Guides and roundups for eco-living and holistic wellness.
        </p>

        <ul className="list">
          {posts.map((p) => (
            <li key={p.href} className="item">
              <h3>
                <Link href={p.href}>{p.title}</Link>
              </h3>
              <small className="date">{p.date}</small>
              <p>{p.excerpt}</p>
              <Link href={p.href} className="read">Read →</Link>
            </li>
          ))}
        </ul>
      </main>

      <style jsx>{`
        .container { max-width: 920px; margin: 2.5rem auto; padding: 0 16px; }
        h1 { font-size: 2rem; margin-bottom: .5rem; }
        .intro { color: #4b5563; margin-bottom: 1.25rem; }
        .list { display: grid; gap: 18px; padding: 0; list-style: none; }
        .item { border: 1px solid #e5e7eb; border-radius: 10px; padding: 16px; background: #fff; }
        .date { color: #6b7280; }
        .read { display: inline-block; margin-top: 6px; text-decoration: underline; }
      `}</style>
    </>
  );
}
