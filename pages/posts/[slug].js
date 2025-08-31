import { getAllPosts, getPost } from "../../lib/posts";

export default function Post({ post }) {
  return (
    <div style={{padding:"2rem", fontFamily:"sans-serif", lineHeight:"1.6"}}>
      <h1>{post.title}</h1>
      <p><em>{post.date}</em></p>
      <p>{post.description}</p>
      <article dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}

// Generate static paths for each post
export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((p) => ({
    params: { slug: p.slug },
  }));

  return { paths, fallback: false };
}

// Fetch post content for each page
export async function getStaticProps({ params }) {
  const post = getPost(params.slug);
  return { props: { post } };
}

