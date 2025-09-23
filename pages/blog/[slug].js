// /pages/blog/[slug].js
import SEO from "../../components/SEO";
import { getAllPostSlugs, getPostBySlug } from "../../src/lib/blog";

export async function getStaticPaths() {
  const slugs = getAllPostSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { notFound: true };

  // Add rel attributes to ALL links for safety (esp. affiliate)
  const processedHtml = addRelToLinks(post.contentHtml);

  return {
    props: {
      post: { ...post, contentHtml: processedHtml }
    }
  };
}

export default function BlogPost({ post }) {
  const { title, excerpt, date, updated, authorName, tags, contentHtml } = post;
  const ld = buildArticleJsonLd({ post });

  return (
    <>
      <SEO
        title={title}
        description={excerpt || "Wild & Well article"}
        path={`/blog/${post.slug}`}
      />

      <div className="container">
        <article className="section">
          <header style={{ marginBottom: 16 }}>
            <h1 style={{ marginBottom: 8 }}>{title}</h1>
            <p className="muted" style={{ margin: 0 }}>
              <time dateTime={date}>{formatDate(date)}</time>
              {updated && updated !== date ? (
                <> · Updated <time dateTime={updated}>{formatDate(updated)}</time></>
              ) : null}
              <> · By {authorName}</>
              {tags?.length ? <> · {tags.join(" • ")}</> : null}
            </p>
          </header>

          <div
            className="prose"
            // Content already sanitized for rel attributes
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          <p className="muted" style={{ marginTop: 24, fontSize: 13 }}>
            This site may earn a commission from some links. We only recommend things we’d give to family.
          </p>
        </article>
      </div>

      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}

function addRelToLinks(html) {
  if (!html) return html;
  // Add rel attrs to any http(s) links (covers affiliate & external)
  return html.replace(
    /<a\s+([^>]*?)href=("|\')(https?:\/\/[^"\']+)("|\')([^>]*)>/gi,
    (m, pre, q1, href, q2, post) => {
      // preserve existing rel but ensure required tokens present
      const hasRel = /rel\s*=\s*("|\')([^"\']*)\1/i.exec(pre + post);
      const required = ["sponsored", "nofollow", "noopener", "noreferrer"];
      let relVal = required.join(" ");
      if (hasRel) {
        const current = hasRel[2].split(/\s+/).filter(Boolean);
        relVal = Array.from(new Set([...current, ...required])).join(" ");
        // strip old rel=... from tag before re-inject to avoid duplicates
        const withoutRel = (pre + post).replace(/\srel\s*=\s*("|\')[^"\']*\1/gi, "");
        return `<a ${withoutRel} href="${href}" rel="${relVal}">`;
      }
      return `<a ${pre}href="${href}" rel="${relVal}"${post}>`;
    }
  );
}

function buildArticleJsonLd({ post }) {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://www.wild-and-well.store";
  const url = `${site}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt || "",
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: [{ "@type": "Person", name: post.authorName || "Wild & Well" }],
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url
  };
}

function formatDate(s) {
  try {
    const d = new Date(s + "T00:00:00Z");
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  } catch {
    return s;
  }
}
