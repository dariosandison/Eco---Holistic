import Link from 'next/link';
import { getAllDocsSummary } from '../lib/content';

export default function GuidesIndex({ guides }) {
  return (
    <main className="mx-auto max-w-3xl py-10">
      <h1 className="text-3xl font-semibold mb-6">Guides</h1>
      <ul className="space-y-4">
        {guides.map((g) => (
          <li key={g.slug}>
            <Link href={`/guides/${g.slug}`} className="text-blue-600 underline">
              {g.title || g.slug}
            </Link>
            {g.date && <div className="text-sm text-gray-500">{g.date}</div>}
            {g.excerpt && <p className="text-gray-700">{g.excerpt}</p>}
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  const guides = getAllDocsSummary('guides', ['slug', 'title', 'date', 'excerpt']);
  return { props: { guides } };
}
