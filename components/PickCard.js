import Image from 'next/image';
// components/PickCard.js
export default function PickCard({ variant='top', title, image, blurb, bullets=[], url }) {
  const map = {
    top:   {label:'Top Pick',    cls:'pill pill--top'},
    budget:{label:'Budget',      cls:'pill pill--budget'},
    upgrade:{label:'Upgrade',    cls:'pill pill--upgrade'},
  };
  const meta = map[variant] || map.top;

  return (
    <aside className="card" style={{ marginTop: 16 }}>
      <div className="pills"><span className={meta.cls}>{meta.label}</span></div>
      {image && <Imagesrc={image} alt="" className="card-img" loading="lazy" / width={800} height={600} />}
      <div className="card-body">
        <h3 style={{marginBottom:4}}>{title}</h3>
        {blurb && <p style={{marginTop:6}}>{blurb}</p>}
        {bullets?.length ? (
          <ul style={{marginTop:8}}>
            {bullets.map((b,i)=><li key={i}>{b}</li>)}
          </ul>
        ) : null}
        {url && (
          <p style={{marginTop:12}}>
            <a className="btn" href={url} target="_blank" rel="nofollow sponsored noopener">Check availability</a>
          </p>
        )}
        <small style={{color:'var(--muted)'}}>We may earn a commission if you buy through our links, at no extra cost to you.</small>
      </div>
    </aside>
  );
}
