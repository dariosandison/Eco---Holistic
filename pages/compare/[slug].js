// pages/compare/[slug].js
import fs from "fs";
import Image from "next/image";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import SEO from "../../components/SEO";
import { serializeMdx, jsonSafeMeta } from "../../lib/mdx";
import Callout from "../../components/Callout";
import CompareInline from "../../components/CompareInline";
import CompareTable from "../../components/CompareTable";

const ROOT = process.cwd();

function fileFor(dir, slug) {
  const base = path.join(ROOT, "content", dir, slug);
  if (fs.existsSync(`${base}.mdx`)) return `${base}.mdx`;
  if (fs.existsSync(`${base}.md`)) return `${base}.md`;
  return null;
}

function listSlugs(dir) {
  const full = path.join(ROOT, "content", dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.(md|mdx)$/i, ""));
}

export async function getStaticPaths() {
  return {
    paths: listSlugs("compare").map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const file = fileFor("compare", params.slug);
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);

  // Normalize products array (used by CompareTable and cards)
  const products = Array.isArray(data?.products)
    ? data.products.map((p) => ({
        name: p.name || "",
        brand: p.brand || "",
        image: p.image || "",
        price: p.price != null ? Number(p.price) : null,
        rating: p.rating != null ? Number(p.rating) : null,
        warranty: p.warranty || "",
        weight: p.weight || "",
        highlights: Array.isArray(p.highlights) ? p.highlights : [],
        pros: Array.isArray(p.pros) ? p.pros : [],
        cons: Array.isArray(p.cons) ? p.cons : [],
        linkSlug: p.linkSlug || "",
        link: p.link || "",
      }))
    : [];

  const mdxSource = await serializeMdx(content || "");
  const meta = jsonSafeMeta({ ...data, products });

  const title = meta.title || params.slug.replace(/-/g, " ");
  const description = meta.description || "Side-by-side comparison.";
  const url = `https://www.wild-and-well.store/compare/${params.slug}`;
  const breadcrumbs = [
    { name: "Home", item: "https://www.wild-and-well.store/" },
    { name: "Compare", item: "https://www.wild-and-well.store/compare" },
    { name: title, item: url },
  ];

  return {
    props: {
      slug: params.slug,
      meta,
      mdxSource,
      seo: {
        title: `${title} — Compare — Wild & Well`,
        description,
        url,
        type: "article",
        breadcrumbs,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}

export default function ComparePage({ slug, meta, mdxSource, seo }) {
  const items = Array.isArray(meta.products) ? meta.products : [];

  return (
    <>
      <SEO {...seo} />
      <div className="container">
        <article className="post">
          <h1 className="post-title">{meta.title || slug.replace(/-/g, " ")}</h1>
          {(meta.date || meta.updated) && (
            <p className="post-meta">
              {meta.date ? <>Published {new Date(meta.date).toLocaleDateString()}</> : null}
              {meta.date && meta.updated ? <> · </> : null}
              {meta.updated ? <>Updated {new Date(meta.updated).toLocaleDateString()}</> : null}
            </p>
          )}

          {items.length > 0 && (
            <>
              <h2>Quick compare</h2>
              <CompareTable items={items} />
              <div className="cmp-grid">
                {items.map((it, i) => {
                  const href = it.linkSlug
                    ? `/go/${encodeURIComponent(it.linkSlug)}`
                    : it.link || "#";
                  return (
                    <div className="cmp-card" key={i}>
                      <div className="cmp-card-title">{it.name}</div>
                      {it.brand ? <div className="cmp-card-sub">{it.brand}</div> : null}
                      {it.image ? (
                        <Image
                          className="cmp-card-img"
                          src={it.image}
                          alt={it.name}
                          width={800}
                          height={600}
                        />
                      ) : null}
                      {it.price != null ? (
                        <div className="cmp-price">£{Number(it.price)}</div>
                      ) : null}
                      {it.rating != null ? (
                        <div className="cmp-badge">{Number(it.rating).toFixed(1)}★</div>
                      ) : null}
                      {Array.isArray(it.highlights) && it.highlights.length > 0 ? (
                        <ul style={{ margin: "8px 0 12px 18px" }}>
                          {it.highlights.slice(0, 4).map((h, j) => (
                            <li key={j}>{h}</li>
                          ))}
                        </ul>
                      ) : null}
                      <div className="cmp-actions">
                        {href !== "#" ? (
                          <a
                            className="btn btn-primary"
                            href={href}
                            rel="nofollow sponsored noopener noreferrer"
                          >
                            Check price
                          </a>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {mdxSource ? (
            <MDXRemote {...mdxSource} components={{ Callout, CompareInline }} />
          ) : null}

          {Array.isArray(meta.related) && meta.related.length > 0 ? (
            <div className="relbox">
              <div className="relbox-title">Related</div>
              <ul className="relbox-grid">
                {meta.related.map((r, i) => (
                  <li key={`${r.type}-${r.slug}-${i}`}>
                    <Link href={`/${r.type}/${r.slug}`} className="relbox-card">
                      <span className="relbox-name">{r.title || r.slug}</span>
                      {r.description ? (
                        <span className="relbox-desc">{r.description}</span>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </article>
      </div>
    </>
  );
}

