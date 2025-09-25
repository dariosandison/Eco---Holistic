import Link from "next/link";
import { getAllPostsMeta } from "../../lib/blog";

export default function Blog({ posts }) {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold">Blog</h1>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <ul className="space-y-3">
          {posts.map((p) => (
            <li key={p.slug} className="rounded-md border p-4">
              <Link href={`/blog/${p.slug}`} className="font-medium underline">
                {p.title}
              </Link>
              {p.date && <div className="text-xs text-gray-500">{new Date(p.date).toLocaleDateString()}</div>}
              {p.description && <p className="mt-1 text-sm text-gray-600">{p.description}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPostsMeta();
  return { props: { posts } };
}
