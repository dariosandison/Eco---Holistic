import Link from 'next/link';
import { getAllDocsSummary } from '../lib/content';

export default function BlogIndex({ posts }) {
  return (
    <main className="mx-auto max-w-3xl py-10">
      <h1 className="text-3xl font-semibold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="text-blue-600 underline">
              {p.title || p.slug}
            </Link>
            {p.date && <div className="text-sm text-gray-500">{p.date}</div>}
            {p.excerpt && <p className="text-gray-700">{p.excerpt}</p>}
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  const posts = getAllDocsSummary('blog', ['slug', 'title', 'date', 'excerpt']);
  return { props: { posts } };
}
