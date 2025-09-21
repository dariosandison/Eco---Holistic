import AffiliateButton from "./AffiliateButton";

export default function ComparisonTable({ items = [] }) {
  if (!items.length) return null;
  return (
    <section style={{marginTop:24}}>
      <h2 style={{marginBottom:8}}>Quick Compare</h2>
      <div className="card" style={{overflowX:'auto'}}>
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Best for</th>
              <th>Highlights</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map(row => (
              <tr key={row.title}>
                <td><strong>{row.title}</strong></td>
                <td>{row.bestFor}</td>
                <td>{row.highlights}</td>
                <td><AffiliateButton href={row.href} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
