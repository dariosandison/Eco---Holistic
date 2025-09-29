// pages/500.js
import SEO from '../components/SEO';
import Link from 'next/link';

export default function ServerError() {
  const seo = {
    title: 'Error — Wild & Well',
    description: 'Something went wrong.',
    url: 'https://www.wild-and-well.store/500',
    noindex: true
  };

  return (
    <>
      <SEO {...seo} />
      <div className="container">
        <article className="post">
          <h1 className="post-title">We hit a snag</h1>
          <p>Please try again in a moment, or go back to the <Link href="/">homepage</Link>.</p>
        </article>
      </div>
    </>
  );
}
