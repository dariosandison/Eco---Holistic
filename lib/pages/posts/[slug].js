import { marked } from "marked";
import { getAllPosts, getPost } from "@/lib/posts";

export default function Post({ post }) {
  return (
    <>
      <nav>
        <a href="/">← Home</a>
        <span style={{flex:1}}></span>
        <a href="/shop">Shop</a>
        <a href="/guides">Guides</a>
      </nav>
      <article className="card">
        <h1>{post.title}</h1>
        <div style={{opacity:.7, marginBottom:16}}>{new Date(post.date).toLocaleDateString()}</div>
        <div dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  return { paths: posts.map(p => ({ params: { slug: p.slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getPost(params.slug);
  return { props: { post } };
}
