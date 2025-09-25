import Head from 'next/head';
import { getAllGuidesMeta, getGuideBySlug } from '../../lib/guides';

// Basic sanitizer for any leaked comments/front-matter in descriptions
function cleanSnippet(str = '') {
  return String(str)
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/^-{3}[\s\S]*?-{3}/, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export default function GuidePage({ guide }) {
  if (!guide) {
    return <p>Guide not found.</p>;
  }

  const title = guide.title || 'Guide';
  const description = cleanSnippet(guide.description || guide.excerpt || '');

  return (
    <>
      <Head>
        <title>{title} | Wild &amp; Well</title>
        {description && <meta name="description" content={description} />}
      </Head>

      <article className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-3xl font-semibold tracking-tight">{title}</h1>

        {description && (
          <p className="mb-6 text-[color:var(--olive-900)]/80">{description}</p>
        )}

        {/* Render HTML produced from the Markdown */}
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: guide.html || guide.content || '' }}
        />
      </article>
    </>
  );
}

export async function getStaticPaths() {
  // Use your existing lib to build all slugs
  const guides = getAllGuidesMeta();
  const paths = guides.map((g) => ({ params: { slug: g.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const guide = await getGuideBySlug(params.slug);
  return { props: { guide } };
}
