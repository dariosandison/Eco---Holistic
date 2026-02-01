// components/MoneyPageQuickCompare.jsx
/**
 * Quick comparison table built from a PICKS array.
 * Designed for scanning: best-for label + one key note + one trade-off.
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
        Summary of the main differences across a small set of options.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {picks.slice(0, 3).map((p, idx) => (
          <div key={idx} className="card p-4">
            <div className="flex flex-wrap items-center gap-2">
              <div className="text-sm font-semibold text-zinc-900">{p.title}</div>
              {p.badge ? <span className="chip">{p.badge}</span> : null}
            </div>
            {p.desc ? <p className="mt-2 text-sm text-zinc-700">{p.desc}</p> : null}
            {Array.isArray(p.bullets) && p.bullets.length ? (
              <ul className="mt-3 list-disc pl-5 text-sm text-zinc-700 space-y-1">
                {p.bullets.slice(0, 2).map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>

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
