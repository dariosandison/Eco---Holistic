// pages/admin/affiliate-dashboard.js
import { useMemo } from 'react';
import affiliates from '../../data/affiliates';
import SEO from '../../components/SEO';

// Minimal CSV encoder (RFC4180-ish)
function toCsv(rows) {
  const headers = Object.keys(rows[0] || { slug: '', url: '' });
  const esc = (v) => {
    const s = String(v ?? '');
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
    };
  const head = headers.map(esc).join(',');
  const body = rows.map((r) => headers.map((h) => esc(r[h])).join(',')).join('\n');
  return head + '\n' + body;
}

export async function getStaticProps() {
  return {
    props: {}, // no SSR data needed
    revalidate: 60 * 60 * 6
  };
}

export default function AffiliateDashboard() {
  const items = useMemo(
    () => Object.entries(affiliates).map(([slug, url]) => ({ slug, url })),
    []
  );

  const handleDownload = () => {
    const csv = toCsv(items);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const urlObj = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = urlObj;
    a.download = 'affiliates.csv';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(urlObj);
  };

  const seo = {
    title: 'Affiliate Dashboard — Wild & Well',
    description: 'List and export affiliate destinations.',
    url: 'https://www.wild-and-well.store/admin/affiliate-dashboard',
    type: 'website'
  };

  return (
    <>
      <SEO {...seo} />
      <div className="container" style={{ marginTop: 22 }}>
        <article className="post">
          <h1 className="post-title">Affiliate Dashboard</h1>
          <p className="post-meta">All `/go/*` slugs mapped to destinations.</p>

          <div style={{ display: 'flex', gap: 12, margin: '12px 0 18px' }}>
            <button className="btn btn-primary" onClick={handleDownload}>Download CSV</button>
            <a className="btn btn-outline" href="/sitemap.xml" target="_blank" rel="noopener noreferrer">Open Sitemap</a>
            <a className="btn btn-outline" href="/feed.xml" target="_blank" rel="noopener noreferrer">Open RSS</a>
          </div>

          <div className="table-scroll">
            <table className="comp-table">
              <thead>
                <tr>
                  <th className="sticky-col">Slug</th>
                  <th>Destination</th>
                  <th>Go Link</th>
                </tr>
              </thead>
              <tbody>
                {items.map((it) => (
                  <tr key={it.slug}>
                    <td className="sticky-col"><code>{it.slug}</code></td>
                    <td style={{ wordBreak: 'break-all' }}>
                      <a href={it.url} target="_blank" rel="nofollow sponsored noopener noreferrer">{it.url}</a>
                    </td>
                    <td><a href={`/go/${it.slug}`} target="_blank" rel="nofollow noopener noreferrer">/go/{it.slug}</a></td>
                  </tr>
                ))}
                {items.length === 0 ? (
                  <tr><td colSpan={3}>No affiliates defined. Add entries in <code>data/affiliates.js</code>.</td></tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </article>
      </div>
    </>
  );
}
