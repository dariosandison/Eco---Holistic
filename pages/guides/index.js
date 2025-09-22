import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';
import SEO from '@/components/SEO';
import EmailSignup from '@/components/EmailSignup';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store';
const GUIDES_DIR = path.join(process.cwd(), 'content', 'guides');

export default function Home({ guides }) {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <SEO
        title="Wild & Well — Eco-living, holistic health, mindful wellness"
        description="Bite-size, practical guides for eco-friendly living, holistic health, and mindful wellness."
        canonical={SITE}
      />

      {/* Hero */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold">Wild & Well</h1>
        <p className="text-lg text-gray-600 mt-2">
          Your guide to eco-living, holistic health, and mindful wellness.
        </p>
      </section>

      {/* Email CTA */}
      <section className="mb-12">
        <EmailSignup />
      </section>

      {/* Latest Guides */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Latest Guides</h2>
          <Link href="/guides" className="underline">View all</Link>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map(g => (
            <li key={g.slug} className="border rounded-xl overflow-hidden hover:shadow-sm transition">
              <Link href={`/guides/${g.slug}`} className="block">
                {g.cover && (
                  <div className="relative w-full h-44">
                    <Image src={g.cover} alt={g.title} fill className="object-cover" />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-semibold">{g.title}</h3>
                  {g.description && <p className="text-sm text-gray-600 mt-1">{g.description}</p>}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-12 text-xs text-gray-500">
        <p>
          We may earn from qualifying purchases (affiliate links). We only recommend products we genuinely like.
          <Link className="underline ml-1" href="/disclosure">Disclosure</Link>.
        </p>
      </footer>
    </main>
  );
}

export async function getStaticProps() {
  const files = fs.existsSync(GUIDES_DIR) ? fs.readdirSync(GUIDES_DIR) : [];
  const guides = files
    .filter(f => f.endsWith('.md'))
    .map(name => {
      const raw = fs.readFileSync(path.join(GUIDES_DIR, name), 'utf8');
      const { data } = matter(raw);
      return {
        slug: name.replace(/\.md$/, ''),
        title: data.title || name,
        description: data.description || '',
        cover: data.cover || ''
      };
    })
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
    .slice(0, 9);

  return { props: { guides } };
}
