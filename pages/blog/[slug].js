// pages/blog/[slug].js
import SEO from "../../components/SEO";
import AffiliateLink from "../../components/AffiliateLink";
import { getAllPostSlugs, getPostBySlug } from "../../src/lib/blog";

export default function BlogPost({ html, meta, url }) {
  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        url={url}
        isArticle
        datePublished={meta.date}
        dateModified={meta.updated}
        breadcrumbs={[
          { name: "Home", item: "https://www.wild-and-well.store/" },
          { name: "Blog", item: "https://www.wild-and-well.store/blog" },
          { name: meta.title, item: url },
        ]}
      />
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1rem" }}>
        <h1 style={{ marginBottom: ".25rem" }}>{meta.title}</h1>
        {meta.date && (
          <p style={{ color: "#666", marginTop: 0 }}>
            {meta.date} {meta.updated && `(updated: ${meta.updated})`}
          </p>
        )}
        <article
          className="prose"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {/* Optional example so there's always an affiliate anchor rendered */}
        <div style={{ marginTop: 32 }}>
          <AffiliateLink href="https://example.com/?affid=yourid">
            Today’s best price
          </AffiliateLink>
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = getAllPostSlugs();
  return { paths: slugs.map((slug) => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  const url = `https://www.wild-and-well.store/blog/${slug}`;
  return { props: { ...post, url } };
}
