import Head from 'next/head';
import { getAllSlugs, getDocWithHtml } from '../../lib/content';

export default function BlogPost({ post }) {
  return (
    <>
      <Head><title>{post.title || post.slug}</title></Head>
      <main className="prose mx-auto py-10">
        <h1>{post.title || post.slug}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.html }} />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = getAllSlugs('blog'); // -> ['welcome', 'how-we-review-products', ...]
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false, // all blog posts are known at build time
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params; // IMPORTANT: slug, not id
  const post = await getDocWithHtml('blog', slug);
  return { props: { post } };
}
