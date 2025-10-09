export default function ComparisonTable({ columns = [], rows = [] }) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="min-w-[600px]">
        <thead>
          <tr>{columns.map((c, i) => <th key={i} className="text-left">{c}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri}>
              {r.map((cell, ci) => <td key={ci}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

