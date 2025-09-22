// pages/guides/index.js
import Link from "next/link";
import { getAllGuides } from "../../src/lib/guides";

const formatDate = (iso) =>
  iso
    ? new Date(iso).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

export default function GuidesIndex({ items }) {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Guides</h1>
      <ul className="space-y-6">
        {items.map(({ slug, title, date, description }) => (
          <li key={slug} className="border rounded-lg p-4 hover:shadow-sm transition">
            <Link href={`/guides/${slug}`} className="block">
              <h2 className="text-xl font-semibold">{title}</h2>
              {date && <p className="text-sm opacity-70">{formatDate(date)}</p>}
              {description && <p className="mt-2">{description}</p>}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  const guides = getAllGuides();
  // Only send serializable fields to the client
  const items = guides.map(({ meta }) => ({
    slug: meta.slug,
    title: meta.title,
    date: meta.date || null, // already ISO or null
    description: meta.description || null,
  }));
  return { props: { items } };
}
