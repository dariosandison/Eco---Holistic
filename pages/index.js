import Link from "next/link";
import { getAllPosts } from "../lib/posts";
import Head from "next/head";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Wild & Well | Eco + Holistic Blog 🌿</title>
        <meta
          name="description"
          content="Wild & Well: Explore natural remedies, herbal teas, eco-friendly habits, and holistic health guides for sustainable living."
        />
        <meta property="og:title" content="Wild & Well | Eco + Holistic Blog 🌿" />
        <meta
          property="og:description"
          content="Discover holistic wellness, natural healing, and eco-friendly living tips."
        />
        <meta property="og:url" content="https://www.wild-and-well.store" />
        <meta property="og:image" content="/cover.jpg" />
      </Head>

      <div className="container">
        <header>
          <h1>🌿 Wild & Well</h1>
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
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}
