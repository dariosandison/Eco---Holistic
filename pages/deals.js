import fs from "fs";
import path from "path";
import AffiliateLink from "../components/AffiliateLink";

export default function Deals({ deals }) {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold">Deals</h1>
      {deals.length === 0 ? (
        <p>No deals yet.</p>
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2">
          {deals.map((d, i) => (
            <li key={i} className="rounded-md border p-4">
              <div className="font-medium">{d.title}</div>
              {d.description && <p className="text-sm text-gray-600">{d.description}</p>}
              {d.url && (
                <div className="mt-2">
                  <AffiliateLink href={d.url}>View deal ↗</AffiliateLink>
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
  const file = path.join(process.cwd(), "data", "deals.json");
  let deals = [];
  try {
    deals = JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {}
  return { props: { deals } };
}
