// /pages/guides/[slug].js
import Head from "next/head";

export default function GuidePage({ guide }) {
  if (!guide) return null;

  const { meta, html } = guide;
  const title = `${meta.title} | Wild & Well`;
  const description = meta.description || "Guide";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
        {meta.updated && <meta property="article:modified_time" content={meta.updated} />}
        <link rel="canonical" href={`https://www.wild-and-well.store/guides/${guide.slug}`} />
      </Head>

      <main className="container" style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem" }}>
        <article>
          <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{meta.title}</h1>
          {(meta.date || meta.updated) && (
            <p style={{ color: "#7a7a7a", marginTop: 0 }}>
              {meta.date && <>Published: {meta.date}</>}
              {meta.updated && <> &middot; Updated: {meta.updated}</>}
            </p>
          )}
          {/* Render Markdown converted to HTML by the library */}
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  // server-only import (prevents 'fs' from entering client bundle)
  const { getAllGuidesSlugs } = await import("../../src/lib/guides");
  const slugs = await getAllGuidesSlugs();

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { getGuideBySlug } = await import("../../src/lib/guides");
  const guide = await getGuideBySlug(params.slug);

  // Drafts should not build as public pages
  if (!guide || guide.meta?.draft) {
    return { notFound: true };
  }

  return { props: { guide } };
}
