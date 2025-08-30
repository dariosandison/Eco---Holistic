import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home({ posts }) {
  return (
    <>
      <nav>
        <b>Eco + Holistic</b>
        <span style={{flex:1}}></span>
        <Link href="/shop">Shop</Link>
        <Link href="/guides">Guides</Link>
      </nav>

      <div className="card" style={{marginBottom:16}}>
        <h1>Natural Living, Holistic Health</h1>
        <p>Simple, science-aware tips for eco lifestyle and gentle healing. Ads, affiliate links, and products may earn a commission.</p>
      </div>

      <h2>Latest posts</h2>
      <div className="postlist">
        {posts.map(p => (
          <Link key={p.slug} href={`/posts/${p.slug}`}>
            <div>
              <b>{p.title}</b>
              <div style={{opacity:.8, fontSize:14}}>{new Date(p.date).toLocaleDateString()}</div>
              <div style={{opacity:.9}}>{p.description}</div>
            </div>
          </Link>
        ))}
      </div>

      <footer>© {new Date().getFullYear()} Eco + Holistic</footer>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}
