// pages/blog/index.jsx
import BlogCard from "../../components/BlogCard";
import { getAllBlog } from "../../lib/content";

export default function BlogIndex({ posts = [] }){
  const latest = posts.slice(0, 6);
  return (
    <>
      <h1 style={{ color:"#fff", marginTop: 12 }}>Blog</h1>

      <section className="card" style={{ padding:16, marginTop:12, background:"var(--surface)" }}>
        <h2 style={{ margin:"0 0 8px", color:"#1f2b22" }}>Latest Posts</h2>
        <div className="grid-guides">
          {latest.map(p => <BlogCard key={p.slug} post={p} />)}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps(){
  const posts = getAllBlog();
  return { props: { posts } };
}
