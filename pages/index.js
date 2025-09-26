export const seo = {
  title: 'Holistic Guides, Clean Products & Deals',
  description:
    'Evidence-guided, low-tox living. Practical guides, vetted picks, and the best wellness deals.',
};

import Link from 'next/link';

export default function Home() {
  return (
    <div className="prose">
      <h1>Wild &amp; Well</h1>
      <p>Actionable guides and clean product picks.</p>
      <ul>
        <li><Link href="/guides">Explore Guides</Link></li>
        <li><Link href="/blog">Read the Blog</Link></li>
        <li><Link href="/deals">Today’s Deals</Link></li>
      </ul>
    </div>
  );
}
