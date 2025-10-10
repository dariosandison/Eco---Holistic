export default function ComparisonTable({ columns = [], rows = [] }){
  // columns: [{ key:'name', label:'Product' }, { key:'price', label:'Price' }, ...]
  // rows: [{ name:'X', price:'£', ... }, ...]
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-separate border-spacing-0">
        <thead>
          <tr>
            {columns.map(col => (
              <th key={col.key} className="text-left bg-neutral-50 border-b px-3 py-2 sticky top-0">{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="odd:bg-white even:bg-neutral-50">
              {columns.map(col => (
                <td key={col.key} className="border-b px-3 py-2 align-top">{r[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
