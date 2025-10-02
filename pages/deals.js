// pages/deals.js
import fs from 'fs';
import path from 'path';
import SEO from '../components/SEO';

export async function getStaticProps() {
  const p = path.join(process.cwd(), 'data', 'deals.json');
  let deals = [];
  if (fs.existsSync(p)) {
    try { deals = JSON.parse(fs.readFileSync(p, 'utf8')); } catch {}
  }
  return {
    props: {
      deals,
      seo: {
        title: 'Today’s Deals — Wild & Well',
        description: 'Live wellness deals we actually recommend: cleaner ingredients, better sleep, and simple upgrades.',
        url: 'https://www.wild-and-well.store/deals',
        breadcrumbs: [
          { name: 'Home', item: 'https://www.wild-and-well.store/' },
          { name: 'Deals', item: 'https://www.wild-and-well.store/deals' }
        ]
      }
    },
    revalidate: 60 * 15
  };
}

export default function DealsPage({ deals, seo }) {
  return (
    <>
      <SEO {...seo} />
      <div className="container" style={{ marginTop: 22 }}>
        <section className="hero-wrap">
          <div className="hero">
            <h1 className="h1">Today’s Deals</h1>
            <p className="lead">Quick, high-value picks. We only list products we’d use ourselves.</p>
          </div>
        </section>

        <div className="grid" style={{ gap: 16 }}>
          {deals?.length ? deals.map((d, i) => (
            <a
              key={i}
              href={d.href}
              rel="nofollow sponsored noopener noreferrer"
              className="card"
              target="_blank"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 className="h3" style={{ margin: 0 }}>{d.title}</h2>
                {d.badge ? (
                  <span style={{
                    fontSize: 12,
                    background: '#e7efdd',
                    color: '#274512',
                    borderRadius: 999,
                    padding: '4px 8px',
                    border: '1px solid rgba(0,0,0,.08)'
                  }}>{d.badge}</span>
                ) : null}
              </div>
              {d.blurb ? <p style={{ marginTop: 8 }}>{d.blurb}</p> : null}
            </a>
          )) : (
            <div className="card">
              <p>No deals live right now. Check back tomorrow!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
