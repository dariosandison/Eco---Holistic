import { getAllPosts, getPostBySlug } from "../../lib/posts";

export default function Post({ post }) {
  return (
    <div className="container">
      <article>
        <h1>{post.title}</h1>
        <p className="date">{post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  return {
    paths: posts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  return { props: { post } };
}
