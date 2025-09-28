// pages/deals.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serializeMdx } from '../lib/mdx';
import SEO from '../components/SEO';
import { mdxComponents } from '../components/MDXComponents';

function ensureArray(v) { return Array.isArray(v) ? v : (v ? [v] : []); }

export async function getStaticProps() {
  const file = path.join(process.cwd(), 'content/deals', 'today.mdx');
  let mdxSource = null;
  let front = { title: "Today’s Deals", description: "Verified promos on products we actually recommend.", deals: [] };

  if (fs.existsSync(file)) {
    const raw = fs.readFileSync(file, 'utf8');
    const { data, content } = matter(raw);
    front = {
      title: data.title || front.title,
      description: data.description || front.description,
      deals: ensureArray(data.deals)
    };
    mdxSource = await serializeMdx(content || '');
  }

  // sort by soonest expiry
  const sorted = [...front.deals].sort((a,b)=> (a.expires||'').localeCompare(b.expires||''));
  return {
    props: {
      seo: {
        title: `${front.title} — Wild & Well`,
        description: front.description,
        url: 'https://www.wild-and-well.store/deals',
        type: 'website',
        breadcrumbs: [
          { name: 'Home', item: 'https://www.wild-and-well.store/' },
          { name: 'Deals', item: 'https://www.wild-and-well.store/deals' }
        ]
      },
      mdxSource,
      deals: sorted,
      nowISO: new Date().toISOString(),
      heading: front.title
    },
    revalidate: 60 * 60 * 6 // 6 hours
  };
}

export default function DealsPage({ seo, mdxSource, deals, nowISO, heading }) {
  const now = new Date(nowISO);
  return (
    <>
      <SEO {...seo} />
      <div className="container" style={{ marginTop: 22 }}>
        <section className="hero">
          <div className="hero-inner">
            <h1 className="post-title">{heading}</h1>
            <p className="hero-slogan">{seo.description}</p>
          </div>
        </section>

        {mdxSource ? (
          <>
            <h2 className="section-title">Editor’s notes</h2>
            <article className="post">
              <MDXRemote {...mdxSource} components={mdxComponents} />
            </article>
          </>
        ) : null}

        <h2 className="section-title">Live offers</h2>
        <div className="grid">
          {deals.map((d, i) => {
            const expired = d.expires ? new Date(d.expires) < now : false;
            return (
              <article className="card" key={i} style={{ opacity: expired ? .5 : 1 }}>
                <h3 style={{ marginTop: 0 }}>{d.title}</h3>
                {d.note ? <p style={{ margin: '6px 0' }}>{d.note}</p> : null}
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
          {deals.length === 0 ? <article className="card"><p>No deals at the moment.</p></article> : null}
        </div>
      </div>
    </>
  );
}
