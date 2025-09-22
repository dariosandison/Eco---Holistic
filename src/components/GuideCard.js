import Link from 'next/link';

export default function GuideCard({ guide }){
  return (
    <article className="card">
      {guide.image ? (
        <img src={guide.image} alt="" style={{aspectRatio:'16/9',objectFit:'cover'}} />
      ) : null}
      <div className="cardBody">
        <h3><Link href={`/guides/${guide.slug}`}>{guide.title}</Link></h3>
        <p style={{color:'var(--muted)',margin:'0 0 6px'}}>{guide.summary}</p>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:8}}>
          <div className="badges">
            {(guide.tags||[]).slice(0,3).map(t => <span className="badge" key={t}>{t}</span>)}
          </div>
          {guide.readTime ? <small style={{color:'var(--muted)'}}>{guide.readTime}</small> : null}
        </div>
      </div>
    </article>
  );
}
