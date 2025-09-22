import Head from 'next/head';
import AffiliateNote from '../../src/components/AffiliateNote';
import { getAllGuidesMeta, getGuideBySlug } from '../../src/lib/guides';
import { markdownToHtml } from '../../src/lib/markdown';

export default function Guide({ meta, html }) {
  if (!meta) return <div className="article">Not found</div>;
  return (
    <article className="article">
      <Head>
        <title>{meta.title} – Wild &amp; Well</title>
        {meta.summary ? <meta name="description" content={meta.summary}/> : null}
      </Head>

      <header>
        <h1>{meta.title}</h1>
        <div className="meta">
          {meta.date ? <span>Updated {meta.date}</span> : null}
          {meta.readTime ? <span>{' • '}{meta.readTime}</span> : null}
        </div>
        {meta.image ? (
          <img src={meta.image} alt="" style={{borderRadius:12,margin:'8px 0 10px'}} />
        ) : null}
      </header>

      <AffiliateNote />

      <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />

      <hr style={{margin:'28px 0',border:'none',borderTop:'1px solid var(--border)'}}/>
      <div>
        <strong>Related:</strong>{' '}
        <a href="/guides">Explore all guides</a>
      </div>
    </article>
  );
}

export async function getStaticPaths(){
  const guides = getAllGuidesMeta();
  return {
    paths: guides.map(g => ({ params: { slug: g.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }){
  const data = getGuideBySlug(params.slug);
  if (!data) return { props: { meta: null, html: '' } };
  const html = await markdownToHtml(data.content);
  return { props: { meta: data.meta, html } };
}
