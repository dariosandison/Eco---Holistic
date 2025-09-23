// pages/blog/index.js
import SEO from "../../components/SEO";
import Link from "next/link";
import { getAllPostsMeta } from "../../src/lib/blog";

export default function BlogIndex({ posts, url }) {
  return (
    <>
      <SEO
        title="Blog"
        description="All articles from Wild & Well"
        url={url}
      />
      <main className="container" style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem" }}>
        <h1>Blog</h1>
        {posts.length === 0 && <p>Posts coming soon.</p>}
        <ul style={{ listStyle: "none", padding: 0 }}>
          {posts.map((p) => (
            <li key={p.slug} style={{ margin: "1rem 0", paddingBottom: "1rem", borderBottom: "1px solid #eee" }}>
              <h3 style={{ margin: "0 0 .25rem" }}>
                <Link href={`/blog/${p.slug}`}>{p.title}</Link>
              </h3>
              {p.date && <small style={{ color: "#666" }}>{p.date}</small>}
              {p.description && <p style={{ marginTop: ".5rem" }}>{p.description}</p>}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export function getStaticProps() {
  const posts = getAllPostsMeta();
  const url = "https://www.wild-and-well.store/blog";
  return { props: { posts, url } };
}
