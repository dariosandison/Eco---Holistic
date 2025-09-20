import SEO from '../../components/SEO';
import { getGuideSlugs, getGuideBySlug } from '../../lib/guides';

export default function GuidePage({ front, contentHtml }) {
  return (
    <>
      <SEO
        title={`${front.title} • Wild & Well`}
        description={front.excerpt}
        path={`/guides/${front.slug}`}
      />
      <main className="container">
        <div className="hero" style={{paddingTop:24}}>
          <span className="kicker">Guide</span>
          <h1>{front.title}</h1>
          {front.excerpt && <p className="muted" style={{maxWidth:720}}>{front.excerpt}</p>}
        </div>

        <article className="prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />

        <aside style="margin-top:18px;color:#6b7280;font-size:.9rem">
          <small>Some links may be affiliate links. As an Amazon Associate, we earn from qualifying purchases.</small>
        </aside>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = getGuideSlugs().map(f => f.replace(/\.md$/,''));
  return {
    paths: slugs.map(slug => ({ params:{ slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { front, contentHtml } = await getGuideBySlug(params.slug);
  return { props: { front, contentHtml } };
}
