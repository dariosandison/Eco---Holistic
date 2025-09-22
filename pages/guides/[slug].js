// /pages/guides/[slug].js
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getAllGuidesSlugs, getGuideBySlug } from "@/src/lib/guides";

export default function GuidePage({ slug, meta, html }) {
  const bcrumb = [
    { name: "Home", url: "/" },
    { name: "Guides", url: "/guides" },
    { name: meta?.title || slug },
  ];

  return (
    <>
      <SEO
        title={meta?.title}
        description={meta?.description}
        type="article"
        canonicalPath={`/guides/${slug}`}
        image={meta?.image}
        publishedTime={meta?.date || undefined}
        modifiedTime={meta?.updated || meta?.date || undefined}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Guides", url: "/guides" },
          { name: meta?.title || slug, url: `/guides/${slug}` },
        ]}
        article={{ authorName: meta?.author || "Wild & Well" }}
      />
      <Breadcrumbs items={bcrumb} />
      <article>
        <h1>{meta?.title}</h1>
        {meta?.subtitle && <p style={{ color: "#667085" }}>{meta.subtitle}</p>}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = await getAllGuidesSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const guide = await getGuideBySlug(slug);

  // ensure date values are strings for Next.js serialization
  const meta = {
    ...guide.meta,
    date: guide.meta?.date ? new Date(guide.meta.date).toISOString() : null,
    updated: guide.meta?.updated ? new Date(guide.meta.updated).toISOString() : null,
  };

  return {
    props: {
      slug,
      meta,
      html: guide.html || "",
    },
  };
}
