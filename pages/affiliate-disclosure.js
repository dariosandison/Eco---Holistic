// pages/affiliate-disclosure.js
import SeoHead from '../components/SeoHead';

export default function AffiliateDisclosure() {
  const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store';
  return (
    <>
      <SeoHead title="Affiliate Disclosure — Wild & Well" description="How affiliate links support our work." url={`${SITE}/affiliate-disclosure`} />
      <article className="container card prose" style={{marginTop:20}}>
        <h1>Affiliate Disclosure</h1>
        <p>We use affiliate links for some product recommendations. If you buy through those links, we may earn a small commission at no extra cost to you.</p>
        <p>We only recommend products we genuinely believe in.</p>
      </article>
    </>
  );
}

