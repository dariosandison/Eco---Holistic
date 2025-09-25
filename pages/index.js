import Link from "next/link";
import { getAllGuidesMeta } from "../lib/guides";

export default function Home({ guides }) {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="mb-2 text-2xl font-semibold">Wild &amp; Well</h1>
        <p className="text-gray-700">Simple, cleaner living guides and deals.</p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold">Latest Guides</h2>
        {guides.length === 0 ? (
          <p>No guides yet.</p>
        ) : (
          <ul className="grid gap-3 sm:grid-cols-2">
            {guides.slice(0, 6).map((g) => (
              <li key={g.slug} className="rounded-md border p-4">
                <Link href={`/guides/${g.slug}`} className="font-medium underline">
                  {g.title}
                </Link>
                {g.description && <p className="mt-1 text-sm text-gray-600">{g.description}</p>}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const guides = getAllGuidesMeta();
  return { props: { guides } };
}
