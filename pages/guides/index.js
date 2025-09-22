import { useMemo, useState, useEffect } from 'react';
import GuideCard from '../../src/components/GuideCard';
import SearchAndFilter from '../../src/components/SearchAndFilter';
import { getAllGuidesMeta } from '../../src/lib/guides';

export default function Guides({ guides, allTags, initialTag }) {
  const [q, setQ] = useState('');
  const [tag, setTag] = useState(initialTag || '');

  // Keep URL in sync when clicking chips
  useEffect(()=>{
    const url = tag ? `/guides?tag=${encodeURIComponent(tag)}` : '/guides';
    window.history.replaceState(null,'',url);
  },[tag]);

  const filtered = useMemo(()=>{
    return guides.filter(g=>{
      const matchQ = q.trim()
        ? (g.title + ' ' + g.summary + ' ' + (g.tags||[]).join(' ')).toLowerCase().includes(q.toLowerCase())
        : true;
      const matchTag = tag ? (g.tags||[]).includes(tag) : true;
      return matchQ && matchTag;
    });
  },[guides,q,tag]);

  return (
    <>
      <section className="hero" style={{padding:'28px 0 12px'}}>
        <div className="heroInner container" style={{textAlign:'left'}}>
          <h1 style={{fontSize:28,marginBottom:6}}>All Guides</h1>
          <p style={{marginBottom:0,color:'var(--muted)'}}>Search and filter through every guide we’ve published.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SearchAndFilter
            value={q}
            onChange={setQ}
            tags={allTags}
            activeTag={tag}
            onTagToggle={setTag}
          />
          <div className="grid">
            {filtered.map(g => <GuideCard key={g.slug} guide={g} />)}
          </div>
          {filtered.length === 0 && (
            <p style={{color:'var(--muted)',marginTop:16}}>No results. Try a different search or filter.</p>
          )}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({ params, preview, previewData, locale, locales }) {
  const guides = getAllGuidesMeta();
  const allTags = Array.from(new Set(guides.flatMap(g => g.tags))).sort();
  // Read initial tag from URL at build fallback? We can’t; handled client-side. Provide empty default.
  return { props: { guides, allTags, initialTag: '' } };
}
