// pages/404.js
import SEO from '../components/SEO';
import Link from 'next/link';

export default function NotFound() {
  const seo = {
    title: 'Page Not Found — Wild & Well',
    description: 'Sorry, we couldn’t find that page.',
    url: 'https://www.wild-and-well.store/404',
    noindex: true
  };

  return (
    <>
      <SEO {...seo} />
      <div className="container">
        <article className="post">
          <h1 className="post-title">Page not found</h1>
          <p>Try heading back to the <Link href="/">homepage</Link> or browsing our <Link href="/guides">guides</Link>.</p>
        </article>
      </div>
    </>
  );
}
