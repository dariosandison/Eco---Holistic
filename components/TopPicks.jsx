import Image from "next/image";
import AffiliateButton from "./AffiliateButton";

export default function TopPicks({ picks = [] }) {
  if (!picks.length) return null;
  return (
    <section style={{marginTop:24}}>
      <h2 style={{marginBottom:8}}>Our Picks</h2>
      <div className="grid grid-3">
        {picks.map((p) => (
          <div className="card" key={p.title}>
            {p.badge && <span className="badge">{p.badge}</span>}
            {p.image && (
              <div style={{margin:'10px 0'}}>
                {/* If external image, Next/Image needs domain in next.config.js */}
                <Image src={p.image} alt={p.title} width={480} height={320} />
              </div>
            )}
            <h3 style={{margin:'6px 0'}}>{p.title}</h3>
            <p style={{color:'#4b5563'}}>{p.description}</p>
            <div style={{display:'flex', gap:8, alignItems:'center', marginTop:10}}>
              <AffiliateButton href={p.href} />
              {p.price && <span style={{color:'#6b7280'}}>{p.price}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
