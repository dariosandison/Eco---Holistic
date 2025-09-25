import Link from "next/link";
import { getAllGuidesMeta } from "../../lib/guides";

export default function Guides({ guides }) {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold">Guides</h1>
      {guides.length === 0 ? (
        <p>No guides yet.</p>
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2">
          {guides.map((g) => (
            <li key={g.slug} className="rounded-md border p-4">
              <Link href={`/guides/${g.slug}`} className="font-medium underline">
                {g.title}
              </Link>
              {g.description && <p className="mt-1 text-sm text-gray-600">{g.description}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const guides = getAllGuidesMeta();
  return { props: { guides } };
}
