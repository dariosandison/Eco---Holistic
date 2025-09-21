import Head from 'next/head';
import SEO from '../../src/components/SEO';
import { getAllGuides, getGuideBySlug } from '../../src/lib/guides';

export default function GuidePage({ meta, html }) {
  const site = 'https://www.wild-and-well.store';
  const url = `${site}/guides/${meta.slug}`;

  // Article JSON-LD
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.excerpt || '',
    datePublished: meta.date || '',
    author: { '@type': 'Person', name: meta.author || 'Wild & Well' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: meta.cover ? (meta.cover.startsWith('http') ? meta.cover : `${site}${meta.cover}`) : `${site}/cover.png`,
    publisher: {
      '@type': 'Organization',
      name: 'Wild & Well',
      logo: { '@type': 'ImageObject', url: `${site}/logo.png` }
    }
  };

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.excerpt || 'Practical, bite-size guidance you can use today.'}
        canonical={url}
        image={meta.cover || '/cover.png'}
      />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      </Head>

      <main className="container">
        <article className="card" style={{ padding: 20 }}>
          <header>
            <h1>{meta.title}</h1>
            <p className="small">
              {formatDate(meta.date)}
              {meta.category ? ` · ${meta.category}` : ''}
            </p>
          </header>

          {meta.cover && (
            <div style={{ margin: '12px 0', borderRadius: 12, overflow: 'hidden' }}>
              <img src={meta.cover} alt={meta.title} />
            </div>
          )}

          <div dangerouslySetInnerHTML={{ __html: html }} />

          <hr />
          <p className="small">
            As an Amazon Associate, we may earn from qualifying purchases—at no extra cost to you.
          </p>
        </article>
      </main>
    </>
  );
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

export async function getStaticPaths() {
  const guides = await getAllGuides();
  return {
    paths: guides.map((g) => ({ params: { slug: g.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const g = await getGuideBySlug(params.slug);
  // Ensure serializable meta
  const meta = {
    slug: g.slug,
    title: g.title || '',
    excerpt: g.excerpt || '',
    date: g.date ? String(g.date) : null,
    cover: g.cover || '',
    category: g.category || '',
    author: g.author || 'Wild & Well'
  };
  return { props: { meta, html: g.contentHtml || '' } };
}
