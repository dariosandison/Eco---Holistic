export default function ComparisonTable({ items = [] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-separate border-spacing-0">
        <thead>
          <tr className="bg-[#fdf6e5]">
            <th className="text-left p-3 sticky left-0 bg-[#fdf6e5] z-10">Pick</th>
            <th className="text-left p-3">Why</th>
            <th className="text-left p-3">Key specs</th>
            <th className="text-left p-3">Shop</th>
          </tr>
        </thead>
        <tbody>
          {items.map((it, i) => (
            <tr key={i} className="border-b border-slate-200">
              <td className="p-3 font-semibold sticky left-0 bg-white z-10">{it.name}</td>
              <td className="p-3">{it.why}</td>
              <td className="p-3">{it.specs}</td>
              <td className="p-3">
                <a href={it.url} rel="nofollow sponsored noopener" target="_blank" className="btn btn-primary">View</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
