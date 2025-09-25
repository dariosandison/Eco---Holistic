// pages/guides/index.js
import Link from "next/link";
import { getAllGuides } from "../../lib/guides";

export async function getStaticProps() {
  const guides = getAllGuides();
  return { props: { guides } };
}

export default function GuidesIndex({ guides }) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">Guides</h1>
      {(!guides || guides.length === 0) && (
        <p className="text-gray-600">No guides yet. Check back soon.</p>
      )}
      <ul className="grid gap-6 md:grid-cols-2">
        {guides.map(g => (
          <li key={g.slug} className="border rounded p-4">
            <Link href={`/guides/${g.slug}`} className="text-lg font-medium underline">
              {g.title}
            </Link>
            {g.excerpt && <p className="mt-2 text-sm text-gray-700">{g.excerpt}…</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
