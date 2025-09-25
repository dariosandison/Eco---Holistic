// pages/blog/[slug].js
import { getAllPostSlugs, getPostBySlug } from "../../lib/blog";

export async function getStaticPaths() {
  const slugs = getAllPostSlugs();
  return { paths: slugs.map(slug => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { notFound: true };
  return { props: { post } };
}

export default function BlogPost({ post }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 prose">
      <h1>{post.title}</h1>
      {/* Basic render; if you add MD/MDX rendering later we can upgrade this */}
      <pre className="whitespace-pre-wrap">{post.content}</pre>
    </article>
  );
}
