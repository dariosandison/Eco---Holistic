// pages/blog/index.js
import Link from "next/link";
import { getAllPostsMeta } from "../../lib/blog";

export async function getStaticProps() {
  const posts = getAllPostsMeta();
  return { props: { posts } };
}

export default function BlogIndex({ posts }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">Blog</h1>
      {(!posts || posts.length === 0) && (
        <p className="text-gray-600">No posts yet. Check back soon.</p>
      )}
      <ul className="space-y-4">
        {posts.map(p => (
          <li key={p.slug} className="border-b pb-4">
            <Link href={`/blog/${p.slug}`} className="text-lg font-medium underline">
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
