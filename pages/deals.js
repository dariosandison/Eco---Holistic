// pages/deals.js
import SEO from '../components/SEO';
import dealsData from '../data/deals';

export async function getStaticProps() {
  // sort by soonest expiry and revalidate frequently
  const now = new Date();
  const deals = [...dealsData].sort((a,b)=> (a.expires||'').localeCompare(b.expires||''));
  return {
    props: { deals, now: now.toISOString() },
    revalidate: 60 * 60 * 6 // 6 hours
  };
}

export default function DealsPage({ deals, now }) {
  const nowDate = new Date(now);
  const seo = {
    title: 'Today’s Deals — Wild & Well',
    description: 'Live deals and promo codes on our top picks. Updated with expiration dates and notes.',
    url: 'https://www.wild-and-well.store/deals',
    type: 'website',
    breadcrumbs: [
      { name: 'Home', item: 'https://www.wild-and-well.store/' },
      { name: 'Deals', item: 'https://www.wild-and-well.store/deals' }
    ]
  };

  return (
    <>
      <SEO {...seo} />
      <div className="container" style={{ marginTop: 22 }}>
        <section className="hero">
          <div className="hero-inner">
            <h1 className="post-title">Today’s Deals</h1>
            <p className="hero-slogan">Verified promos on products we actually recommend.</p>
          </div>
        </section>

        <h2 className="section-title">Live offers</h2>
        <div className="grid">
          {deals.map((d, i) => {
            const expired = d.expires ? new Date(d.expires) < nowDate : false;
            return (
              <article className="card" key={i} style={{ opacity: expired ? .5 : 1 }}>
                <h3 style={{ marginTop: 0 }}>{d.title}</h3>
                <p style={{ margin: '6px 0' }}>{d.note}</p>
                <p style={{ margin: '6px 0' }}>
                  {d.code ? <>Code: <strong>{d.code}</strong></> : 'Auto-applied at checkout'}
                  {d.expires ? <> · Expires {new Date(d.expires).toLocaleDateString()}</> : null}
                </p>
                <p style={{ margin: 0 }}>
                  <a href={d.url} target="_blank" rel="nofollow sponsored noopener" className="btn btn-primary">Shop deal</a>
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}
