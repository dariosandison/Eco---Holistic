// pages/deals.js
import deals from "../data/deals.json";

export default function DealsPage() {
  const items = Array.isArray(deals) ? deals : [];
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">Deals</h1>
      {items.length === 0 && <p className="text-gray-600">No deals yet.</p>}
      <ul className="grid gap-6 md:grid-cols-2">
        {items.map((d, i) => (
          <li key={i} className="border rounded p-4">
            <div className="text-lg font-medium">{d.title}</div>
            {d.description && <p className="text-sm text-gray-700 mt-2">{d.description}</p>}
            <div className="mt-3">
              <a
                href={d.url}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="inline-block rounded bg-black px-4 py-2 text-white"
              >
                View Offer
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
