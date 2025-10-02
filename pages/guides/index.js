// pages/guides/index.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import SEO from '../../components/SEO';

function readGuides() {
  const dir = path.join(process.cwd(), 'content', 'guides');
  if (!fs.existsSync(dir)) return [];

  const items = fs
    .readdirSync(dir)
    .filter((f) => /\.mdx?$/i.test(f))
    .map((f) => {
      const slug = f.replace(/\.(md|mdx)$/i, '');
      const raw = fs.readFileSync(path.join(dir, f), 'utf8');
      const { data } = matter(raw);
      const date = data?.updated || data?.date || null;
      return {
        slug,
        title: data?.title || slug.replace(/-/g, ' '),
        description: data?.description || '',
        hub: data?.hub || 'General',
        dateISO: date ? new Date(date).toISOString() : null,
      };
    });

  items.sort((a, b) => (b.dateISO || '').localeCompare(a.dateISO || ''));
  return items;
}

export async function getStaticProps() {
  const guides = readGuides();

  // Group by hub (default "General")
  const groupsMap = new Map();
  for (const g of guides) {
    const key = g.hub || 'General';
    if (!groupsMap.has(key)) groupsMap.set(key, []);
    groupsMap.get(key).push(g);
  }

  const groups = Array.from(groupsMap.entries()).map(([key, items]) => ({
    key,
    title: key === 'General' ? 'All Guides' : key.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    items,
  }));

  return {
    props: {
      groups,
      seo: {
        title: 'Guides — Wild & Well',
        description: 'Actionable guides to help you sleep better, stress less, and move more.',
        url: 'https://www.wild-and-well.store/guides',
        breadcrumbs: [
          { name: 'Home', item: 'https://www.wild-and-well.store/' },
          { name: 'Guides', item: 'https://www.wild-and-well.store/guides' },
        ],
      },
    },
  };
}

export default function GuidesIndex({ groups, seo }) {
  return (
    <>
      <SEO {...seo} />
      <div className="container">
        <article className="post">
          <h1 className="post-title">Guides</h1>

          {groups.map((group) => (
            <section key={group.key} style={{ marginBottom: 24 }}>
              <h2 style={{ marginTop: 12 }}>{group.title}</h2>
              <ul className="relbox-grid" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {group.items.map((g) => (
                  <li key={g.slug}>
                    <Link href={`/guides/${g.slug}`} className="relbox-card">
                      <span className="relbox-name">{g.title}</span>
                      {g.description ? <span className="relbox-desc">{g.description}</span> : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <p className="post-meta">
            Looking for product comparisons? See our <Link href="/compare">Comparisons</Link>.
          </p>
        </article>
      </div>
    </>
  );
}
