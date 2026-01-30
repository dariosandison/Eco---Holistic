// components/MoneyPageQuickCompare.jsx
/**
 * Quick comparison table built from a PICKS array.
 * Keeps pages consistent without turning them into salesy "rankings".
 */
export default function MoneyPageQuickCompare({ picks, title = "Quick compare" }) {
  if (!picks || !Array.isArray(picks) || picks.length === 0) return null;

  const rows = picks.slice(0, 6).map((p) => {
    const keyNote = Array.isArray(p.bullets) && p.bullets.length ? p.bullets[0] : "";
    const tradeOff = Array.isArray(p.bullets) && p.bullets.length > 1 ? p.bullets[1] : (p.desc || "");
    const bestFor = p.badge || "Good fit";
    return {
      name: p.title,
      bestFor,
      keyNote,
      tradeOff,
    };
  });

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
        A fast overview before you dive into the shortlist. If you’re unsure, start with the “Before you buy” section above.
      </p>

      <div className="mt-6 overflow-x-auto rounded-2xl border bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b bg-zinc-50">
            <tr>
              <th className="px-4 py-3 font-semibold">Option</th>
              <th className="px-4 py-3 font-semibold">Good for</th>
              <th className="px-4 py-3 font-semibold">Key note</th>
              <th className="px-4 py-3 font-semibold">Trade-off</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => (
              <tr key={idx} className="border-b last:border-0">
                <td className="px-4 py-3 font-medium text-zinc-900">{r.name}</td>
                <td className="px-4 py-3 text-zinc-700">{r.bestFor}</td>
                <td className="px-4 py-3 text-zinc-700">{r.keyNote}</td>
                <td className="px-4 py-3 text-zinc-700">{r.tradeOff}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
