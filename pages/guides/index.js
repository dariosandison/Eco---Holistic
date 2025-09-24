// pages/guides/index.js
import Head from "next/head";
import Link from "next/link";
import { getAllGuidesMeta } from "@/src/lib/guides";

export async function getStaticProps() {
  const guides = getAllGuidesMeta().filter((g) => !g.draft);
  return {
    props: { guides },
  };
}

export default function GuidesIndex({ guides }) {
  return (
    <>
      <Head>
        <title>Guides | Wild &amp; Well</title>
        <meta name="description" content="Practical wellness, non-toxic living, and low-waste guides." />
      </Head>

      <section className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-semibold tracking-tight">Guides</h1>
        <p className="mt-2 text-neutral-600">
          Curated, easy-to-follow guides across wellness and low-waste living.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="block rounded-lg border p-5 hover:shadow-sm"
            >
              {g.image ? (
                // Use plain <img> so we don't depend on next/image config for now
                <img
                  src={g.image}
                  alt={g.title}
                  className="mb-3 h-40 w-full rounded-md object-cover"
                  loading="lazy"
                />
              ) : null}
              <h2 className="text-lg font-medium">{g.title}</h2>
              {g.date ? <p className="mt-1 text-xs text-neutral-500">{g.date}</p> : null}
              {g.description ? (
                <p className="mt-2 text-sm text-neutral-700 line-clamp-3">{g.description}</p>
              ) : null}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
