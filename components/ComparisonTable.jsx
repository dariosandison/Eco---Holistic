export default function ComparisonTable({ caption, columns = [], rows = [] }) {
  return (
    <div className="mt-6 overflow-x-auto rounded-2xl border bg-white shadow-sm">
      <table className="w-full min-w-[720px] text-sm">
        {caption ? (
          <caption className="px-4 py-3 text-left text-sm text-zinc-600">{caption}</caption>
        ) : null}
        <thead className="bg-zinc-50">
          <tr>
            {columns.map((c) => (
              <th
                key={c.key}
                scope="col"
                className="px-4 py-3 text-left font-semibold text-zinc-800"
              >
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t">
              {columns.map((c) => (
                <td key={c.key} className="px-4 py-3 align-top text-zinc-700">
                  {row[c.key] ?? '—'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
