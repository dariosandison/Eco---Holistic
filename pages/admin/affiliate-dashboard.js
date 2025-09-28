// pages/admin/affiliate-dashboard.js
import { useMemo, useState } from 'react';
import Papa from 'papaparse';
import SEO from '../../components/SEO';

function csvToRows(text) {
  const parsed = Papa.parse(text, { header: true, skipEmptyLines: true });
  return parsed.data;
}

function groupBy(arr, keyFn) {
  const map = new Map();
  for (const row of arr) {
    const k = keyFn(row);
    if (!k) continue;
    map.set(k, (map.get(k) || 0) + (Number(row.event_count || row.EventCount || row.count || 1)));
  }
  return Array.from(map.entries()).map(([k,v]) => ({ key: k, count: v })).sort((a,b)=>b.count-a.count);
}

function extractDomain(url) {
  try {
    const d = new URL(url);
    return d.hostname.replace(/^www\./,'');
  } catch { return ''; }
}

export default function AffiliateDashboard() {
  const [rows, setRows] = useState([]);
  const [error, setError] = useState('');

  const clicks = useMemo(() => {
    // Accept common GA4 column names
    return rows.filter(r => {
      const name = (r.event_name || r.EventName || '').toString().toLowerCase();
      return name === 'affiliate_click' || name === 'click' || name === 'outbound_click';
    });
  }, [rows]);

  const byDomain = useMemo(() => {
    return groupBy(clicks, r => {
      const label = r.event_label || r.EventLabel || r.link_url || r.LinkUrl || r.url || '';
      return extractDomain(label);
    }).filter(d => d.key);
  }, [clicks]);

  const byPage = useMemo(() => {
    const pageKey = (r) => (r.page_location || r.PageLocation || r.page || r.PagePath || '').toString().replace(/^https?:\/\/[^/]+/,'');
    return groupBy(clicks, pageKey).filter(p => p.key);
  }, [clicks]);

  const byDate = useMemo(() => {
    const pickDate = (r) => (r.date || r.Date || r.event_date || '').toString();
    const grouped = groupBy(clicks, pickDate).filter(d => d.key);
    return grouped.sort((a,b)=> a.key.localeCompare(b.key));
  }, [clicks]);

  const totalClicks = clicks.reduce((a,r)=> a + (Number(r.event_count || r.EventCount || 1)), 0);

  const onFile = (e) => {
    setError('');
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const text = reader.result.toString();
        const data = csvToRows(text);
        setRows(data);
      } catch (err) {
        setError('Could not parse CSV. Please export GA4 Events as CSV and try again.');
      }
    };
    reader.readAsText(file);
  };

  const seo = {
    title: 'Affiliate Dashboard — Wild & Well',
    description: 'Inspect affiliate clicks by destination domain, by page, and over time using a GA4 CSV export.',
    url: 'https://www.wild-and-well.store/admin/affiliate-dashboard',
    type: 'website',
    breadcrumbs: [
      { name: 'Home', item: 'https://www.wild-and-well.store/' },
      { name: 'Affiliate Dashboard', item: 'https://www.wild-and-well.store/admin/affiliate-dashboard' }
    ]
  };

  return (
    <>
      <SEO {...seo} />
      <meta name="robots" content="noindex,nofollow" />
      <div className="container" style={{ marginTop: 22 }}>
        <section className="hero">
          <div className="hero-inner">
            <h1 className="post-title">Affiliate Dashboard</h1>
            <p className="hero-slogan">Drop a GA4 “Events” CSV export (with <code>affiliate_click</code>) to analyze performance.</p>
            <div className="cta-row" style={{ marginTop: 12 }}>
              <label className="btn btn-outline" style={{ cursor:'pointer' }}>
                Upload CSV
                <input type="file" accept=".csv,text/csv" onChange={onFile} style={{ display:'none' }} />
              </label>
              <a className="btn btn-primary" href="/affiliate-events-sample.csv" download>Download sample CSV</a>
            </div>
          </div>
        </section>

        {error ? <article className="card"><p style={{ color:'#b91c1c' }}>{error}</p></article> : null}

        <h2 className="section-title">Summary</h2>
        <div className="grid">
          <article className="card">
            <h3 style={{ marginTop: 0 }}>Total affiliate clicks</h3>
            <p style={{ fontSize: 28, margin: 0 }}>{totalClicks.toLocaleString()}</p>
          </article>
          <article className="card">
            <h3 style={{ marginTop: 0 }}>Rows loaded</h3>
            <p style={{ fontSize: 28, margin: 0 }}>{rows.length.toLocaleString()}</p>
          </article>
        </div>

        <h2 className="section-title">Clicks by destination domain</h2>
        <article className="post">
          <table className="comp-table">
            <thead>
              <tr><th>Domain</th><th>Clicks</th></tr>
            </thead>
            <tbody>
              {byDomain.map((d,i)=>(
                <tr key={i}><td>{d.key}</td><td>{d.count}</td></tr>
              ))}
              {byDomain.length===0 ? <tr><td colSpan="2">No data yet.</td></tr> : null}
            </tbody>
          </table>
        </article>

        <h2 className="section-title">Clicks by page</h2>
        <article className="post">
          <table className="comp-table">
            <thead>
              <tr><th>Page</th><th>Clicks</th></tr>
            </thead>
            <tbody>
              {byPage.map((p,i)=>(
                <tr key={i}><td>{p.key}</td><td>{p.count}</td></tr>
              ))}
              {byPage.length===0 ? <tr><td colSpan="2">No data yet.</td></tr> : null}
            </tbody>
          </table>
        </article>

        <h2 className="section-title">Clicks over time</h2>
        <article className="post">
          <table className="comp-table">
            <thead>
              <tr><th>Date</th><th>Clicks</th></tr>
            </thead>
            <tbody>
              {byDate.map((d,i)=>(
                <tr key={i}><td>{d.key}</td><td>{d.count}</td></tr>
              ))}
              {byDate.length===0 ? <tr><td colSpan="2">No date column detected in CSV.</td></tr> : null}
            </tbody>
          </table>
        </article>
      </div>
    </>
  );
}
