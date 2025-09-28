// components/ComparisonTable.jsx
export default function ComparisonTable({ items = [] }) {
  if (!items.length) return null;
  return (
    <div className="table-scroll">
      <table className="comp-table">
        <thead>
          <tr>
            <th className="sticky-col">Pick</th>
            <th>Why</th>
            <th>Key specs</th>
            <th>Shop</th>
          </tr>
        </thead>
        <tbody>
          {items.map((it, i) => (
            <tr key={i}>
              <td className="sticky-col">{it.name}</td>
              <td>{it.why}</td>
              <td>{it.specs}</td>
              <td>
                <a href={it.url} rel="nofollow sponsored noopener" target="_blank" className="btn btn-primary">View</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
