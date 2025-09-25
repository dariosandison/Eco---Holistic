import fs from "fs";
import path from "path";
import AffiliateLink from "../components/AffiliateLink";

export default function Recommended({ items }) {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold">Recommended</h1>
      {items.length === 0 ? (
        <p>No recommendations yet.</p>
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((it, i) => (
            <li key={i} className="rounded-md border p-4">
              <div className="font-medium">{it.title}</div>
              {it.description && (
                <p className="text-sm text-gray-600">{it.description}</p>
              )}
              {it.url && (
                <div className="mt-2">
                  <AffiliateLink href={it.url}>View ↗</AffiliateLink>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const file = path.join(process.cwd(), "data", "recommended.json");
  let items = [];
  try {
    items = JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    items = [];
  }
  return { props: { items } };
}
