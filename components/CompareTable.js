// components/CompareTable.js
export default function CompareTable({ items=[] }) {
  if (!items.length) return null;
  return (
    <div className="card" style={{ marginTop:16 }}>
      <div className="card-body">
        <h3 style={{margin:0}}>Compare options</h3>
        <div className="cmp">
          <table className="cmp-table">
            <thead><tr>
              <th>Model</th><th>Best for</th><th>Key spec</th><th>Weight/Size</th><th></th>
            </tr></thead>
            <tbody>
              {items.map((it,i)=>(
                <tr key={i}>
                  <td>{it.model}</td>
                  <td>{it.bestFor}</td>
                  <td>{it.spec}</td>
                  <td>{it.size}</td>
                  <td>{it.url && <a href={it.url} className="btn" target="_blank" rel="nofollow sponsored noopener">See</a>}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* mobile cards */}
          <div className="cmp-cards">
            {items.map((it,i)=>(
              <div className="cmp-card" key={i}>
                <strong>{it.model}</strong>
                <div><small>Best for:</small> {it.bestFor}</div>
                <div><small>Key spec:</small> {it.spec}</div>
                <div><small>Weight/Size:</small> {it.size}</div>
                {it.url && <p><a href={it.url} className="btn" target="_blank" rel="nofollow sponsored noopener">See</a></p>}
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          .cmp-table{width:100%;border-collapse:separate;border-spacing:0 8px;}
          .cmp-table th{ text-align:left; color:var(--muted); font-weight:600; font-size:14px; }
          .cmp-table td, .cmp-table th{ padding:8px 10px; }
          .cmp-table tr{ background:#fffdf4; border:1px solid var(--cream-line); }
          .cmp-table tr td:first-child{ font-weight:700; }
          @media (max-width:760px){
            .cmp-table{ display:none; }
            .cmp-cards{ display:grid; gap:10px; }
            .cmp-card{ border:1px solid var(--cream-line); border-radius:12px; padding:10px; background:#fffdf4; }
            .cmp-card small{ color:var(--muted); }
          }
          @media (min-width:761px){
            .cmp-cards{ display:none; }
          }
        `}</style>
      </div>
    </div>
  );
}
