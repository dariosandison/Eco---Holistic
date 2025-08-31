import { getAllSlugs, getPostBySlug } from "../../lib/posts";
import Head from "next/head";
import { remark } from "remark";
import html from "remark-html";

export default function Post({ post }) {
  if (!post) return <p>Post not found.</p>;

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <Head>
        <title>{post.title} | Wild + Well</title>
        <meta name="description" content={post.description} />
      </Head>
      <article>
        <h1>{post.title}</h1>
        <p><em>{post.date}</em></p>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const slugs = getAllSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);

  // Convert markdown -> HTML
  const processedContent = await remark().use(html).process(post.content);
  post.contentHtml = processedContent.toString();

  return { props: { post } };
}
