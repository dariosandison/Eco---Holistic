import { getAllGuides, getGuideBySlug } from '../../src/lib/guides';
import { remark } from 'remark';
import html from 'remark-html';
import SEO from '../../src/components/SEO';
import AffiliateNote from '../../src/components/AffiliateNote';

export default function GuidePage({ slug, meta, htmlContent }) {
  const canonical = `https://www.wild-and-well.store/guides/${slug}`;
  const title = meta.title;
  const description = meta.excerpt || `Practical, non-technical tips for ${meta.title}.`;

  return (
    <>
      <SEO
        title={`${title} — Wild & Well`}
        description={description}
        canonical={canonical}
        type="article"
        article={{
          datePublished: meta.date,
          dateModified: meta.date,
          author: meta.author || 'Wild & Well'
        }}
      />

      <main className="wrap">
        <header className="head">
          <h1>{title}</h1>
          <p className="meta">
            {formatDate(meta.date)}
            {meta.category ? ` · ${meta.category}` : ''}
          </p>
        </header>

        {meta.cover && (
          <div className="cover">
            <img src={meta.cover} alt={title} />
          </div>
        )}

        <article className="article" dangerouslySetInnerHTML={{ __html: htmlContent }} />

        {/* Affiliate note at the **end**, not at the top */}
        <AffiliateNote />

        <footer className="foot">
          <a href="/guides">← Back to all guides</a>
        </footer>
      </main>

      <style jsx>{`
        .wrap { max-width: 860px; margin: 0 auto; padding: 24px; }
        .head h1 { margin: 0 0 6px; line-height: 1.2; }
        .meta { margin: 0; color: #666; }
        .cover { margin: 16px 0 8px; border-radius: 10px; overflow: hidden; }
        .cover img { width: 100%; height: auto; display: block; }
        .article :global(h2) { margin-top: 24px; }
        .article :global(ul) { padding-left: 20px; }
        .article :global(a) { color: #0a7; }
        .foot { margin-top: 28px; }
        .foot a { color: #0a7; text-decoration: none; }
      `}</style>
    </>
  );
}

export async function getStaticProps({ params }) {
  const g = getGuideBySlug(params.slug);
  const processed = await remark().use(html, { sanitize: false }).process(g.content);
  const htmlContent = processed.toString();

  return {
    props: {
      slug: g.slug,
      meta: {
        title: g.title,
        excerpt: g.excerpt || '',
        date: g.date || null,
        cover: g.cover || '',
        category: g.category || '',
        author: g.author || 'Wild & Well',
        featured: !!g.featured
      },
      htmlContent
    }
  };
}

export async function getStaticPaths() {
  const guides = await getAllGuides();
  return {
    paths: guides.map((g) => ({ params: { slug: g.slug } })),
    fallback: false
  };
}

function formatDate(s) {
  if (!s) return '';
  try {
    const d = new Date(s);
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  } catch {
    return s;
  }
}
