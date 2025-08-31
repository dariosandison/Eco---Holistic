import Link from "next/link";
import { getAllPosts } from "../lib/posts";

export default function Home({ posts }) {
  return (
    <div className="container">
      <header>
        <h1>🌿 Eco + Holistic Blog</h1>
        <p className="subtitle">
          Natural living, eco-friendly health, and mindful wellness
        </p>
      </header>

      <section>
        {posts.map((p) => (
          <article key={p.slug}>
            <h2>
              <Link href={`/posts/${p.slug}`}>{p.title}</Link>
            </h2>
            <p className="date">{p.date}</p>
            <p>{p.description}</p>
            <Link href={`/posts/${p.slug}`} className="readmore">
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
