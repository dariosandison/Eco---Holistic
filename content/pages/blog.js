import { getAllPosts } from "../lib/posts";
import Link from "next/link";

export default function Blog({ posts }) {
  // Group posts by category
  const categories = posts.reduce((acc, post) => {
    if (!acc[post.category]) acc[post.category] = [];
    acc[post.category].push(post);
    return acc;
  }, {});

  return (
    <div className="container">
      <h1>🌿 Wild & Well Blog</h1>
      <p>Browse articles by category</p>

      {Object.keys(categories).map((cat) => (
        <section key={cat}>
          <h2>{cat}</h2>
          {categories[cat].map((p) => (
            <article key={p.slug}>
              <h3>
                <Link href={`/posts/${p.slug}`}>{p.title}</Link>
              </h3>
              <p>{p.description}</p>
              <small>{p.date}</small>
            </article>
          ))}
        </section>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}
