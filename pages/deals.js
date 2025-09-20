import Head from "next/head";
import SEO from "../components/SEO";
import ProductCard from "../components/ProductCard";

const TAG = "wildandwell0c-21";

const items = [
  {
    title: "Organic Herbal Tea Sampler",
    description: "Caffeine-free blends for calm evenings.",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1080&auto=format&fit=crop",
    href: `https://www.amazon.co.uk/s?k=organic+herbal+tea+sampler&tag=${TAG}`,
    badge: "Editor’s Pick",
    price: "From £14–£22",
    rating: 5,
  },
  {
    title: "Ceramic Essential Oil Diffuser",
    description: "Minimal design, great for cozy rooms.",
    image:
      "https://images.unsplash.com/photo-1598170845058-32a181b17b36?q=80&w=1080&auto=format&fit=crop",
    href: `https://www.amazon.co.uk/s?k=ceramic+essential+oil+diffuser&tag=${TAG}`,
    badge: "Aromatherapy",
    price: "£25–£40",
    rating: 4,
  },
  {
    title: "Insulated Stainless Steel Bottle",
    description: "Ditch plastic—cold 24h, hot 12h.",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1080&auto=format&fit=crop",
    href: `https://www.amazon.co.uk/s?k=insulated+stainless+steel+water+bottle&tag=${TAG}`,
    badge: "Sustainable",
    price: "£18–£30",
    rating: 5,
  },
];

export default function Deals() {
  return (
    <>
      <SEO title="Deals" path="/deals" />
      <Head>
        <meta
          name="description"
          content="Today’s curated eco & holistic deals—updated regularly."
        />
      </Head>

      <main className="container">
        <h1>Deals</h1>
        <p className="intro">
          Curated discounts and evergreen good-value picks. Some links are
          affiliate links—see our <a href="/disclosure">disclosure</a>.
        </p>

        <section className="grid">
          {items.map((it) => (
            <ProductCard key={it.title} {...it} />
          ))}
        </section>
      </main>

      <style jsx>{`
        .container { max-width: 1100px; margin: 2.5rem auto; padding: 0 16px; }
        h1 { font-size: 2rem; margin-bottom: .5rem; }
        .intro { color: #4b5563; margin-bottom: 1.5rem; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px,1fr)); gap: 18px; }
      `}</style>
    </>
  );
}
