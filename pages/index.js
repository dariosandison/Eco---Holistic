// pages/index.js
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import Link from 'next/link';
import { getAllDocs } from '@/lib/content';

export async function getStaticProps() {
  const guides = await getAllDocs('guides');
  return { props: { guides: guides.slice(0, 6) }, revalidate: 60 };
}

export default function Home({ guides }) {
  return (
    <Layout>
      <SEO title="Wild & Well" description="Evidence-aware wellness and eco guides." />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="mb-2 text-3xl font-bold">Wild & Well</h1>
        <p className="mb-8 opacity-80">
          Actionable guides, clean-product picks, and low-waste habits.
        </p>

        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Latest guides</h2>
          <Link href="/guides" className="text-sm underline">View all</Link>
        </div>

        {guides.length === 0 ? (
          <p>No guides yet — add files under <code>content/guides</code>.</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((g) => (
              <li key={g.slug} className="rounded-xl border bg-white/60 p-4 shadow-sm">
                <h3 className="text-lg font-semibold">
                  <Link href={`/guides/${g.slug}`} className="hover:underline">
                    {g.frontmatter.title}
                  </Link>
                </h3>
                {g.frontmatter.description && (
                  <p className="mt-2 text-sm opacity-80">{g.frontmatter.description}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </Layout>
  );
}
