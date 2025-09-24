import Link from 'next/link';
import { getAllGuidesMeta } from '../../src/lib/guides';

export default function GuidesIndex({ guides }) {
  return (
    <div>
      <h1>Guides</h1>
      <div className="grid">
        {guides.map(g => (
          <article key={g.slug} className="card">
            <h2><Link href={`/guides/${g.slug}`}>{g.title}</Link></h2>
            <p>{g.excerpt}</p>
            <p className="muted">
              {g.date}{g.updated ? ` • Updated ${g.updated}` : ''}
            </p>
            <Link href={`/guides/${g.slug}`} className="btn">Read guide</Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const guides = getAllGuidesMeta();
  return { props: { guides } };
}
