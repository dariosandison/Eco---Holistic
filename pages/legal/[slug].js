import Head from 'next/head';
import { getAllSlugs, getDocWithHtml } from '../../lib/content';

export default function LegalPage({ doc }) {
  return (
    <>
      <Head><title>{doc.title || doc.slug}</title></Head>
      <main className="prose mx-auto py-10">
        <h1>{doc.title || doc.slug}</h1>
        <article dangerouslySetInnerHTML={{ __html: doc.html }} />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = getAllSlugs('legal'); // e.g. ['affiliate-disclosure', ...]
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const doc = await getDocWithHtml('legal', slug);
  return { props: { doc } };
}
