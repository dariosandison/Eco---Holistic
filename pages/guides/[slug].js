// pages/guides/[slug].js
import { getAllGuideSlugs, readGuide } from "@/src/lib/guides";
import { markdownToHtml } from "@/src/lib/markdown";
import SEO from "@/components/SEO";

export default function GuidePage({ meta, html }) {
  const published = meta.date || null;

  const jsonLd =
    meta && {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: meta.title,
      description: meta.description,
      datePublished: published,
      image: meta.coverImage ? [meta.coverImage] : undefined,
    };

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        canonical={`https://www.ecoandholistic.com/guides/${meta.slug}`}
        ogImage={meta.coverImage}
        jsonLd={jsonLd}
      />
      <main className="container mx-auto px-4 max-w-3xl py-8">
        <article>
          <h1 className="text-3xl font-semibold mb-3">{meta.title}</h1>
          {published && (
            <p className="text-sm text-neutral-500 mb-6">
              Updated {new Date(published).toLocaleDateString()}
            </p>
          )}
          <div
            className="prose prose-neutral max-w-none"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = getAllGuideSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { meta, content } = readGuide(params.slug);
  const html = await markdownToHtml(content);

  // ✅ Ensure everything is serializable
  const safeMeta = {
    ...meta,
    date: meta.date || null,
  };

  return {
    props: { meta: safeMeta, html },
  };
}
