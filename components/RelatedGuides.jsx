import Link from 'next/link';

export default function RelatedGuides({ currentSlug, tags = [], allGuides = [] }) {
  const tagSet = new Set((tags || []).map(t => String(t).toLowerCase()));
  const related = allGuides
    .filter(g => g.slug !== currentSlug)
    .map(g => ({ ...g, score: (g.tags || []).reduce((acc, t) => acc + (tagSet.has(String(t).toLowerCase()) ? 1 : 0), 0) }))
    .filter(g => g.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div className="mt-10">
      <h3 className="text-lg font-semibold mb-3">Related Guides</h3>
      <ul className="grid sm:grid-cols-3 gap-4">
        {related.map(r => (
          <li key={r.slug} className="border rounded-lg p-4 hover:shadow-sm">
            <Link href={`/guides/${r.slug}`} className="font-medium underline">{r.title}</Link>
            {r.description && <p className="text-sm mt-1 text-gray-600">{r.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
