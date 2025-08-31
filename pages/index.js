import Link from "next/link";
import { getAllPosts } from "../lib/posts";

export default function Home({ posts }) {
  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto", fontFamily: "Georgia, serif", lineHeight: "1.7" }}>
      <header style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🌿 Eco + Holistic Blog</h1>
        <p style={{ color: "#555" }}>Natural living, eco-friendly health, and mindful wellness</p>
      </header>

      <section>
        {posts.map((p) => (
          <article key={p.slug} style={{ marginBottom: "2rem", paddingBottom: "1.5rem", borderBottom: "1px solid #ddd" }}>
            <h2 style={{ margin: "0 0 0.5rem 0", fontSize: "1.6rem" }}>
              <Link href={`/posts/${p.slug}`} style={{ textDecoration: "none", color: "#2c5530" }}>
                {p.title}
              </Link>
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#777", margin: "0.3rem 0" }}>{p.date}</p>
            <p style={{ margin: "0.5rem 0", color: "#444" }}>{p.description}</p>
            <Link href={`/posts/${p.slug}`} style={{ color: "#006400", fontWeight: "bold" }}>
              Read more →
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}
