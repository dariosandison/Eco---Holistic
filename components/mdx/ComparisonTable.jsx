export default function ComparisonTable({ columns = [], rows = [] }) {
  return (
    <div className="overflow-x-auto border rounded-2xl">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((c) => (
              <th key={c.key} className="text-left font-semibold px-3 py-2">{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="odd:bg-white even:bg-gray-50">
              {columns.map((c) => (
                <td key={c.key} className="px-3 py-2 align-top">{r[c.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
