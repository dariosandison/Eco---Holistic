// /pages/blog/[slug].js
import Link from "next/link";
import SEO from "../../components/SEO";
import { article, breadcrumbs } from "../../src/lib/jsonld";
import { site } from "../../src/lib/site";
import { getAllPostSlugs, getPostBySlug } from "../../src/lib/blog";

export async function getStaticPaths() {
  const slugs = getAllPostSlugs();
  return { paths: slugs.map((slug) => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { notFound: true };
  return { props: { post } };
}

export default function BlogPost({ post }) {
  const path = `/blog/${post.slug}`;
  const jsonLd = [
    article({
      url: `${site.url}${path}`,
      title: post.title,
      description: post.excerpt,
      datePublished: post.date,
      dateModified: post.updated
    }),
    breadcrumbs([
      { name: "Home", item: `${site.url}/` },
      { name: "Blog", item: `${site.url}/blog` },
      { name: post.title, item: `${site.url}${path}` }
    ])
  ];

  const theme = {
    brand: "#6b8e23",
    brandDark: "#556b2f",
    text: "#0f1a10",
    muted: "#4b5563",
    bg: "#fafaf7",
    card: "#ffffff",
    border: "#e5eadf"
  };

  return (
    <div
      style={{
        ["--brand"]: theme.brand,
        ["--brand-dark"]: theme.brandDark,
        ["--text"]: theme.text,
        ["--muted"]: theme.muted,
        ["--bg"]: theme.bg,
        ["--card"]: theme.card,
        ["--border"]: theme.border,
        background: "var(--bg)",
        minHeight: "100vh",
        color: "var(--text)"
      }}
    >
      <SEO title={post.title} description={post.excerpt} path={path} jsonLd={jsonLd} />
      <main style={{ maxWidth: 860, margin: "0 auto", padding: 24 }}>
        <p style={{ margin: "0 0 12px" }}>
          <Link href="/blog" style={{ color: "var(--brand)" }}>
            ← Back to Blog
          </Link>
        </p>
        <h1 style={{ margin: "0 0 8px", color: "var(--brand-dark)", letterSpacing: "-0.02em" }}>{post.title}</h1>
        <p style={{ margin: "0 0 18px", color: "var(--muted)" }}>
          <time dateTime={post.updated}>Updated: {post.updated}</time>
        </p>
        <article
          style={{
            border: "1px solid var(--border)",
            borderRadius: 16,
            padding: 18,
            background: "var(--card)"
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>
      </main>
    </div>
  );
}
