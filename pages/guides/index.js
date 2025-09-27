// pages/guides/index.js
import Link from 'next/link';
import SeoHead from '../../components/SeoHead';
import { getAllDocs } from '../../lib/content';

export async function getStaticProps() {
  const docs = getAllDocs({
    dir: 'content/guides',
    fields: ['title', 'excerpt', 'date', 'image']
  });
  return { props: { docs } };
}

export default function GuidesIndex({ docs }) {
  const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store';
  return (
    <>
      <SeoHead
        title="Guides — Wild & Well"
        description="Actionable wellness guides and clean product picks."
        url={`${SITE}/guides`}
        type="website"
      />
      <div className="container">
        <h1 className="section-title">All Guides</h1>
        <div className="grid">
          {docs.map((d) => (
            <article className="card" key={d.slug}>
              {d.image ? <img src={d.image} alt="" className="card-img" /> : null}
              <div className="card-body">
                <h3><Link href={`/guides/${d.slug}`}>{d.title}</Link></h3>
                <small>{d.date ? new Date(d.date).toLocaleDateString() : ''}</small>
                {d.excerpt ? <p>{d.excerpt}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
