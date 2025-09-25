import Link from 'next/link';
import { getAllGuidesMeta } from '../../lib/guides';

function cleanSnippet(str = '') {
  return String(str)
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/^-{3}[\s\S]*?-{3}/, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 160);
}

export default function Guides({ guides }) {
  return (
    <>
      <h1>Guides</h1>
      <ul className="grid gap-4 sm:grid-cols-2">
        {guides.map((g) => (
          <li key={g.slug} className="rounded-lg border border-olive-200 bg-white p-4">
            <Link href={`/guides/${g.slug}`} className="font-medium no-underline hover:underline">
              {g.title}
            </Link>
            { (g.description || g.excerpt) && (
              <p className="mt-2 text-sm text-olive-900/80">
                {cleanSnippet(g.description || g.excerpt)}
              </p>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const guides = getAllGuidesMeta();
  return { props: { guides } };
}
