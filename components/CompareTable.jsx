export default function CompareTable({ items = [] }) {
  if (!items || items.length < 2) return null;
  return (
    <div className="overflow-x-auto my-8">
      <table className="min-w-full border text-sm">
        <thead>
          <tr>
            <th className="border px-3 py-2 text-left">Product</th>
            <th className="border px-3 py-2 text-left">Key Features</th>
            <th className="border px-3 py-2 text-left">Pros</th>
            <th className="border px-3 py-2 text-left">Cons</th>
            <th className="border px-3 py-2 text-left">Where to Buy</th>
          </tr>
        </thead>
        <tbody>
          {items.map((p, i) => (
            <tr key={i}>
              <td className="border px-3 py-2 font-medium">{p.name || p.title}</td>
              <td className="border px-3 py-2">{Array.isArray(p.features) ? p.features.join(', ') : (p.features || '')}</td>
              <td className="border px-3 py-2">{Array.isArray(p.pros) ? p.pros.join(', ') : (p.pros || '')}</td>
              <td className="border px-3 py-2">{Array.isArray(p.cons) ? p.cons.join(', ') : (p.cons || '')}</td>
              <td className="border px-3 py-2">
                {p.url ? <a className="underline" href={p.url} rel="nofollow sponsored noopener" target="_blank">Check price</a> : ''}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
