// pages/guides/[slug].js
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import Image from 'next/image';
import { getAllDocs, getDoc, listSlugs } from '@/lib/content';

export async function getStaticPaths() {
  const slugs = listSlugs('guides');
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const guide = await getDoc('guides', params.slug);
  if (!guide) return { notFound: true };
  return { props: { guide }, revalidate: 60 };
}

export default function GuidePage({ guide }) {
  const { frontmatter } = guide;
  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <article className="mx-auto max-w-3xl px-4 py-10">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className="mt-2 text-lg opacity-80">{frontmatter.description}</p>
          )}
          {frontmatter.coverImage && (
            <div className="mt-4 overflow-hidden rounded-xl">
              <Image
                src={frontmatter.coverImage}
                alt={frontmatter.title}
                width={1200}
                height={630}
                style={{ width: '100%', height: 'auto' }}
                priority
              />
            </div>
          )}
        </header>
        <div
          className="prose prose-neutral max-w-none"
          dangerouslySetInnerHTML={{ __html: guide.html }}
        />
      </article>
    </Layout>
  );
}
