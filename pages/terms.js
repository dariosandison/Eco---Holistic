// pages/terms.js
import SeoHead from '../components/SeoHead';

export default function Terms() {
  const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store';
  return (
    <>
      <SeoHead title="Terms — Wild & Well" description="Website terms of use." url={`${SITE}/terms`} />
      <article className="container card prose" style={{marginTop:20}}>
        <h1>Terms of Use</h1>
        <p>By using this website, you agree to our terms and conditions.</p>
      </article>
    </>
  );
}
