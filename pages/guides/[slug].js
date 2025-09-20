// pages/guides/[slug].js
import SEO from "../../components/SEO";
import { getGuideSlugs, getGuideBySlug } from "../../lib/guides";

export default function GuidePage({ front, contentHtml }) {
  return (
    <>
      <SEO
        title={`${front.title} • Wild & Well`}
        description={front.excerpt || "A Wild & Well guide."}
        path={`/guides/${front.slug}`}
      />

      <main className="container">
        <header className="hero" style={{ paddingTop: 24 }}>
          <span className="kicker">Guide</span>
          <h1>{front.title}</h1>
          {front.excerpt && (
            <p className="muted" style={{ maxWidth: 720 }}>
              {front.excerpt}
            </p>
          )}
        </header>

        <article
          className="prose"
          // IMPORTANT: contentHtml is a plain string (see lib/guides.js)
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        <aside style={{ marginTop: 18, color: "#6b7280", fontSize: ".9rem" }}>
          <small>
            Some links may be affiliate links. As an Amazon Associate, we earn
            from qualifying purchases.
          </small>
        </aside>
      </main>

      <style jsx>{`
        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 24px 16px 48px;
        }
        .kicker {
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.8rem;
          color: #6b7280;
        }
        h1 {
          margin: 6px 0 6px;
          line-height: 1.2;
        }
        .muted {
          color: #4b5563;
        }
        .prose :global(p) {
          line-height: 1.75;
          margin: 1rem 0;
          color: #1f2937;
        }
        .prose :global(h2) {
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }
        .prose :global(ul),
        .prose :global(ol) {
          padding-left: 1.25rem;
        }
        .prose :global(li) {
          margin: 0.375rem 0;
        }
        .prose :global(a) {
          color: #0ea5e9;
          text-decoration: none;
        }
        .prose :global(a:hover) {
          text-decoration: underline;
        }
        .prose :global(blockquote) {
          border-left: 3px solid #e5e7eb;
          padding-left: 12px;
          color: #374151;
          margin: 1rem 0;
        }
        .prose :global(img) {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
        }
        .prose :global(table) {
          border-collapse: collapse;
          width: 100%;
        }
        .prose :global(th),
        .prose :global(td) {
          border: 1px solid #e5e7eb;
          padding: 8px 10px;
          text-align: left;
        }
      `}</style>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = getGuideSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { front, contentHtml } = await getGuideBySlug(params.slug);
  return { props: { front, contentHtml } };
}
