// pages/affiliate-disclosure.js
import SeoHead from '../components/SeoHead';
import { getDocWithHtml } from '../lib/content';

export async function getStaticProps() {
  const post = await getDocWithHtml({
    dir: 'content/legal',
    slug: 'affiliate-disclosure',
    fields: ['title', 'excerpt', 'date']
  });
  return { props: { post } };
}

export default function AffiliateDisclosure({ post }) {
  const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store';
  const url = `${SITE}/affiliate-disclosure`;

  return (
    <>
      <SeoHead
        title={post?.title ? `${post.title} — Wild & Well` : 'Affiliate Disclosure — Wild & Well'}
        description={post?.excerpt || 'Our affiliate policy and disclosures.'}
        url={url}
        type="article"
      />
      <article className="prose card" style={{ marginTop: 20, padding: 16 }}>
        <h1 style={{ marginTop: 0 }}>{post?.title || 'Affiliate Disclosure'}</h1>
        {post?.date && <div style={{ color: '#4b553d' }}>{new Date(post.date).toLocaleDateString()}</div>}
        <div dangerouslySetInnerHTML={{ __html: post?.contentHtml || '' }} />
      </article>
    </>
  );
}

