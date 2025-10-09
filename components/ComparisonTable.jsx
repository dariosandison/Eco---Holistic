export default function ComparisonTable({ columns = [], rows = [] }) {
  if (!Array.isArray(columns) || !Array.isArray(rows)) return null;
  return (
    <div className="overflow-x-auto rounded-xl border border-white/10">
      <table className="min-w-full text-sm">
        <thead className="bg-white/5">
          <tr>
            {columns.map((c, i) => (
              <th key={i} className="px-4 py-3 text-left font-medium">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri} className="odd:bg-white/0 even:bg-white/5">
              {r.map((cell, ci) => (
                <td key={ci} className="px-4 py-3 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
