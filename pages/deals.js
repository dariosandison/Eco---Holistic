// pages/deals.js
import Head from 'next/head';
import deals from '../data/deals';

export default function DealsPage() {
  const now = new Date();
  const sorted = [...deals].sort((a,b)=> (a.expires||'').localeCompare(b.expires||''));
  return (
    <>
      <Head>
        <title>Today’s Deals — Wild &amp; Well</title>
        <meta name="description" content="Live deals and promo codes on our top picks. Updated with expiration dates and notes." />
      </Head>

      <div className="container" style={{ marginTop: 22 }}>
        <section className="hero">
          <div className="hero-inner">
            <h1 className="post-title">Today’s Deals</h1>
            <p className="hero-slogan">Verified promos on products we actually recommend.</p>
          </div>
        </section>

        <h2 className="section-title">Live offers</h2>
        <div className="grid">
          {sorted.map((d, i) => {
            const expired = d.expires ? new Date(d.expires) < now : false;
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
