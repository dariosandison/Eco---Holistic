import { marked } from "marked";
import { getAllPosts, getPost } from "@/lib/posts";

export default function Post({ post }) {
  return (
    <div style={{padding:"2rem", fontFamily:"sans-serif", maxWidth:"800px", margin:"0 auto"}}>
      <a href="/" style={{display:"inline-block", marginBottom:"1rem"}}>← Back</a>
      <h1>{post.title}</h1>
      <div style={{opacity:0.7, marginBottom:"1rem"}}>
        {new Date(post.date).toLocaleDateString()}
      </div>
      <div dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
    </div>
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
