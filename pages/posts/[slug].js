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
import Head from "next/head";

// inside your Post component:
<Head>
  <title>{post.title} | Wild & Well</title>
  <meta name="description" content={post.description || "Read more on holistic living and eco-friendly health."} />

  {/* Open Graph */}
  <meta property="og:type" content="article" />
  <meta property="og:title" content={`${post.title} | Wild & Well`} />
  <meta property="og:description" content={post.description} />
  <meta property="og:url" content={`https://www.wild-and-well.store/posts/${post.slug}`} />
  <meta property="og:image" content="https://www.wild-and-well.store/cover.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={`${post.title} | Wild & Well`} />
  <meta name="twitter:description" content={post.description} />
  <meta name="twitter:image" content="https://www.wild-and-well.store/cover.jpg" />
</Head>
