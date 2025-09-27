// pages/affiliate-disclosure.js
import SeoHead from '../components/SeoHead';
import { getDocWithHtml } from '../lib/content';

export async function getStaticProps() {
  const post = await getDocWithHtml({
    dir: 'content/legal',
    slug: 'affiliate-disclosure',
    fields: ['title','excerpt','date','image']
  });
  return { props: { post } };
}

export default function AffiliateDisclosure({ post }) {
  const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store';
  return (
    <>
      <SeoHead
        title={post?.title ? `${post.title} — Wild & Well` : 'Affiliate Disclosure — Wild & Well'}
        description={post?.excerpt || 'Our affiliate policy and disclosures.'}
        url={`${SITE}/affiliate-disclosure`}
        type="article"
        image={post?.image || '/images/placeholder-16x9.jpg'}
      />
      <article className="prose card" style={{ marginTop:20, padding:16 }}>
        <h1 style={{ marginTop:0 }}>{post?.title || 'Affiliate Disclosure'}</h1>
        {post?.date && <div style={{ color:'#4b553d' }}>{new Date(post.date).toLocaleDateString()}</div>}
        <div dangerouslySetInnerHTML={{ __html: post?.contentHtml || '<p>Our affiliate disclosure will appear here.</p>' }} />
      </article>
    </>
  );
}

