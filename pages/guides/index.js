// pages/guides/index.js
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import Link from 'next/link';
import Image from 'next/image';
import { getAllDocs } from '@/lib/content';

export async function getStaticProps() {
  const guides = await getAllDocs('guides');
  return { props: { guides }, revalidate: 60 };
}

export default function Guides({ guides }) {
  return (
    <Layout>
      <SEO title="Guides" description="Actionable health & eco guides." />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="mb-6 text-3xl font-bold">Guides</h1>
        {guides.length === 0 ? (
          <p>No guides found. Add markdown files in <code>content/guides</code>.</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((g) => (
              <li key={g.slug} className="rounded-xl border bg-white/60 p-4 shadow-sm">
                {g.frontmatter.coverImage && (
                  <div className="mb-3 overflow-hidden rounded-lg">
                    <Image
                      src={g.frontmatter.coverImage}
                      alt={g.frontmatter.title}
                      width={640}
                      height={360}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                )}
                <h2 className="text-xl font-semibold">
                  <Link href={`/guides/${g.slug}`} className="hover:underline">
                    {g.frontmatter.title}
                  </Link>
                </h2>
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
