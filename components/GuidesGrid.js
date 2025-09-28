// components/GuidesGrid.js
import Link from 'next/link';

export default function GuidesGrid({ guides }) {
  const grid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: 20,
  };
  const card = {
    background: '#F4EEDB',
    borderRadius: 16,
    border: '1px solid rgba(0,0,0,0.12)',
    overflow: 'hidden',
  };
  const banner = {
    background: '#182613',
    height: 180,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const title = {
    padding: '14px 16px 18px',
    color: '#1c4331',
    fontWeight: 800,
    lineHeight: 1.25,
    fontSize: 18,
  };

  return (
    <div style={grid}>
      {guides.map((g) => (
        <Link key={g.slug} href={`/guides/${g.slug}`} style={{ textDecoration: 'none' }}>
          <article style={card}>
            <div style={banner}>
              <img src="/card-logo.png" alt="" onError={(e)=>{e.currentTarget.style.display='none';}} style={{ width: 220, maxWidth: '80%' }} />
            </div>
            <h3 style={title}>{g.title}</h3>
          </article>
        </Link>
      ))}
    </div>
  );
}
