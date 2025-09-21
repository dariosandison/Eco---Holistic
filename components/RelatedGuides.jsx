import Link from "next/link";

export default function RelatedGuides({ items = [] }) {
  if (!items.length) return null;
  return (
    <section style={{marginTop:24}}>
      <h2>Keep Reading</h2>
      <div className="grid grid-3">
        {items.map((g) => (
          <Link href={`/guides/${g.slug}/`} key={g.slug} className="card">
            <div className="badge" style={{marginBottom:8}}>{(g.meta.tags || [])[0] || "Guide"}</div>
            <h3 style={{margin:'6px 0'}}>{g.meta.title}</h3>
            <p style={{color:'#4b5563'}}>{g.meta.description}</p>
            <small style={{color:'#6b7280'}}>Updated {g.meta.date}</small>
          </Link>
        ))}
      </div>
    </section>
  );
}
