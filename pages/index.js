// pages/index.js
import Head from "next/head";
import Link from "next/link";
import { getAllGuidesMeta } from "../src/lib/guides";

function toArray(maybe) {
  if (Array.isArray(maybe)) return maybe;
  if (!maybe || typeof maybe !== "object") return [];
  if (Array.isArray(maybe.items)) return maybe.items;
  if (Array.isArray(maybe.guides)) return maybe.guides;
  if (Array.isArray(maybe.data)) return maybe.data;
  const vals = Object.values(maybe);
  return Array.isArray(vals) ? vals : [];
}

export default function Home({ latest }) {
  return (
    <>
      <Head>
        <title>Wild & Well</title>
        <meta
          name="description"
          content="Simple, evidence-guided tips for low-tox living and better health."
        />
        <link rel="canonical" href="https://www.wild-and-well.store/" />
      </Head>

      <main className="mx-auto max-w-5xl px-4 py-10">
        <section className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight">
            Wild & Well
          </h1>
          <p className="mt-2 text-slate-600">
            Practical, low-tox guides. No fluff, just what works.
          </p>
        </section>

        <section>
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="text-xl font-medium">Latest guides</h2>
            <Link className="text-sm underline" href="/guides">
              View all →
            </Link>
          </div>

          {latest.length === 0 ? (
            <p>No guides yet.</p>
          ) : (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {latest.map((g) => (
                <li key={g.slug} className="rounded-lg border p-4">
                  <h3 className="text-lg font-medium">
                    <Link className="underline" href={`/guides/${g.slug}`}>
                      {g.title}
                    </Link>
                  </h3>
                  {g.description ? (
                    <p className="mt-2 text-sm text-slate-600">
                      {g.description}
                    </p>
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
        </section>
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
      )
      .slice(0, 6);

    return { props: { latest: list }, revalidate: 86400 };
  } catch {
    return { props: { latest: [] }, revalidate: 3600 };
  }
}
