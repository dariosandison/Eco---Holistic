import { getAllGuidesSlugs, getGuideBySlug } from '../../src/lib/guides';
import AffiliateLink from '../../components/AffiliateLink';

export default function GuidePage({ meta, html }) {
  if (!meta) return null;
  return (
    <article className="prose">
      <h1>{meta.title}</h1>
      <p className="muted">
        {meta.date}{meta.updated ? ` • Updated ${meta.updated}` : ''}
      </p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <hr/>
      <p className="muted">
        Some product links may be affiliate links. Example:{' '}
        <AffiliateLink href="https://amazon.com">Amazon example</AffiliateLink>
      </p>
    </article>
  );
}

export async function getStaticPaths() {
  const slugs = getAllGuidesSlugs();
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const result = getGuideBySlug(params.slug);
  return { props: { meta: result?.meta || null, html: result?.html || '' } };
}
