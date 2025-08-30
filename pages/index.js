import Link from "next/link";
import { getAllPosts } from "../lib/posts";

export default function Home({ posts }) {
  return (
    <div style={{padding:"2rem", fontFamily:"sans-serif"}}>
      <h1>Eco + Holistic Blog</h1>
      <p>DEBUG → Found {posts.length} posts</p>
      <h2>Latest Posts</h2>
      <ul>
        {posts.map(p => (
          <li key={p.slug}>
            <Link href={`/posts/${p.slug}`}>{p.title}</Link> – {p.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}

