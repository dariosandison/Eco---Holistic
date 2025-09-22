import SEO from '@/components/SEO';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store';

const DEALS = [
  // Add/edit as needed
  {
    title: 'Editor’s Pick Water Filter',
    url: 'https://www.amazon.com/dp/XXXXXXXX',
    note: 'Solid value, reliable performance',
  }
];

export default function Deals() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <SEO title="Deals" description="Curated wellness deals worth your time." canonical={`${SITE}/deals`} />
      <h1 className="text-3xl font-bold mb-6">Deals</h1>
      {DEALS.length === 0 ? (
        <p>No active deals right now. Check back soon!</p>
      ) : (
        <ul className="space-y-4">
          {DEALS.map((d, i) => (
            <li key={i} className="border rounded-xl p-4">
              <p className="font-semibold">{d.title}</p>
              {d.note && <p className="text-sm text-gray-600">{d.note}</p>}
              <a href={d.url} target="_blank" rel="nofollow sponsored noopener" className="inline-block mt-2 underline">
                View on Amazon
              </a>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
