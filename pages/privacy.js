// pages/privacy.js
import SeoHead from '../components/SeoHead';

export default function Privacy() {
  const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store';
  return (
    <>
      <SeoHead title="Privacy Policy — Wild & Well" description="How we handle your data." url={`${SITE}/privacy`} />
      <article className="container card prose" style={{marginTop:20}}>
        <h1>Privacy Policy</h1>
        <p>We respect your privacy. We only collect the data needed to run the site and improve content.</p>
        <p>If you have any questions, contact us at: <a href="mailto:hello@wild-and-well.store">hello@wild-and-well.store</a>.</p>
      </article>
    </>
  );
}
