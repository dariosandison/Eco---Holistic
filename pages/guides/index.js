// pages/guides/index.js
import Head from "next/head";
import Link from "next/link";
import { getAllGuidesMeta } from "../../src/lib/guides";

function toArray(maybe) {
  if (Array.isArray(maybe)) return maybe;
  if (!maybe || typeof maybe !== "object") return [];
  if (Array.isArray(maybe.items)) return maybe.items;
  if (Array.isArray(maybe.guides)) return maybe.guides;
  if (Array.isArray(maybe.data)) return maybe.data;
  const vals = Object.values(maybe);
  return Array.isArray(vals) ? vals : [];
}

export default function GuidesPage({ guides }) {
  return (
    <>
      <Head>
        <title>Guides | Wild & Well</title>
        <meta
          name="description"
          content="Practical, low-tox guides for a healthier, happier life."
        />
        <link rel="canonical" href="https://www.wild-and-well.store/guides" />
      </Head>

      <main className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="mb-6 text-3xl font-semibold tracking-tight">Guides</h1>

        {guides.length === 0 ? (
          <p>No guides yet.</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((g) => (
              <li key={g.slug} className="rounded-lg border p-4">
                <h2 className="text-lg font-medium">
                  <Link className="underline" href={`/guides/${g.slug}`}>
                    {g.title}
                  </Link>
                </h2>
                {g.description ? (
                  <p className="mt-2 text-sm text-slate-600">{g.description}</p>
                ) : null}
                <p className="mt-2 text-xs text-slate-500">
                  {g.updated || g.date ? (
                    <>Updated: {g.updated || g.date}</>
                  ) : (
                    <> </>
                  )}
                </p>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}

export async function getStaticProps() {
  try {
    const raw = await getAllGuidesMeta();
    const list = toArray(raw)
      .filter(Boolean)
      .map((g) => ({
        slug: g.slug ?? "",
        title: g.title ?? "Untitled",
        description: g.description ?? g.excerpt ?? null,
        image: g.image ?? null,
        date: g.date ?? null,
        updated: g.updated ?? null,
        tags: Array.isArray(g.tags) ? g.tags : [],
        draft: !!g.draft,
      }))
      .filter((g) => !g.draft)
      .sort((a, b) =>
        (b.updated ?? b.date ?? "").localeCompare(a.updated ?? a.date ?? "")
      );

    return { props: { guides: list }, revalidate: 86400 };
  } catch {
    return { props: { guides: [] }, revalidate: 3600 };
  }
}
