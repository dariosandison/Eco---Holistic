// components/mdx/ProsCons.jsx
export default function ProsCons({ pros = [], cons = [], className = '' }) {
  return (
    <div className={`grid md:grid-cols-2 gap-4 ${className}`}>
      <div className="rounded-2xl border p-4">
        <h4 className="font-semibold mb-2">Pros</h4>
        <ul className="space-y-1 text-sm">
          {pros.length ? (
            pros.map((p, i) => (
              <li key={i} className="flex items-start gap-2">
                <span aria-hidden>✓</span>
                <span>{p}</span>
              </li>
            ))
          ) : (
            <li className="text-zinc-500">—</li>
          )}
        </ul>
      </div>
      <div className="rounded-2xl border p-4">
        <h4 className="font-semibold mb-2">Cons</h4>
        <ul className="space-y-1 text-sm">
          {cons.length ? (
            cons.map((c, i) => (
              <li key={i} className="flex items-start gap-2">
                <span aria-hidden>✗</span>
                <span>{c}</span>
              </li>
            ))
          ) : (
            <li className="text-zinc-500">—</li>
          )}
        </ul>
      </div>
    </div>
  );
}
