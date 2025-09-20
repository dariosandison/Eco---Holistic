import SEO from "../components/SEO";
<SEO title="Recommended" path="/recommended" />

// pages/recommended.js
import Head from "next/head";
import ProductCard from "../components/ProductCard";

export default function Recommended() {
  const items = [
    {
      title: "Organic Herbal Tea Sampler",
      description: "Caffeine-free blends for sleep, digestion, and calm evenings.",
      image: "https://m.media-amazon.com/images/I/61s0O5o3zQL._AC_SL1000_.jpg",
      href: "https://www.amazon.co.uk/dp/B07S44J4Y3",
      badge: "Editor’s Pick",
      price: "From £14–£22",
      rating: 5,
    },
    {
      title: "Ceramic Essential Oil Diffuser",
      description: "Minimal diffuser for cozy, plant-friendly rooms.",
      image: "https://m.media-amazon.com/images/I/61Qxq6N3v3L._AC_SL1500_.jpg",
      href: "https://www.amazon.co.uk/dp/B07L5GDTYY",
      badge: "Aromatherapy",
      price: "£25–£40",
      rating: 4,
    },
    {
      title: "Insulated Stainless Steel Water Bottle",
      description: "Ditch plastic—keeps drinks cold 24h, hot 12h.",
      image: "https://m.media-amazon.com/images/I/61Yp-6b6S2L._AC_SL1500_.jpg",
      href: "https://www.amazon.co.uk/dp/B07KQX3H8R",
      badge: "Sustainable",
      price: "£18–£30",
      rating: 5,
    },
    {
      title: "Bamboo Toothbrush (Pack of 10)",
      description: "Compostable handles, soft bristles—lower waste daily.",
      image: "https://m.media-amazon.com/images/I/71s1h8M0gUL._AC_SL1500_.jpg",
      href: "https://www.amazon.co.uk/dp/B07V26G3K9",
      badge: "Low-Waste",
      price: "£8–£12",
      rating: 4,
    },
    {
      title: "Countertop Compost Bin (Charcoal Filter)",
      description: "Odor-controlled bin for easy food-scrap composting.",
      image: "https://m.media-amazon.com/images/I/61m9x5s8rSL._AC_SL1500_.jpg",
      href: "https://www.amazon.co.uk/dp/B00GM5P05O",
      badge: "Kitchen",
      price: "£20–£35",
      rating: 4,
    },
    {
      title: "Magnesium Glycinate (Gentle)",
      description: "Popular option for relaxation and sleep support.*",
      image: "https://m.media-amazon.com/images/I/61Y1V2s2c6L._AC_SL1500_.jpg",
      href: "https://www.amazon.co.uk/dp/B0797HZ8P5",
      badge: "Wellness",
      price: "£16–£25",
      rating: 4,
    },
  ];
// components/JsonLd.js
export default function JsonLd({ data, id }) {
  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

  return (
    <>
      <Head>
        <title>Recommended • Eco & Holistic Picks | Wild & Well</title>
        <meta
          name="description"
          content="Curated eco-friendly and holistic health products we actually like—tea, diffusers, low-waste swaps and more."
        />
      </Head>

      <main className="container">
        <h1>Recommended Products</h1>
        <p className="intro">
          These are curated items that fit an eco-friendly, holistic lifestyle.
          Some links are affiliate links (see our{" "}
          <a href="/disclosure">Affiliate Disclosure</a>), which may earn us a
          small commission at no extra cost to you.
        </p>

        <section className="grid">
          {items.map((it) => (
            <ProductCard key={it.title} {...it} />
          ))}
        </section>

        <p className="fine">
          *Information is educational only and not a substitute for professional medical advice.
        </p>
      </main>

      <style jsx>{`
        .container { max-width: 1100px; margin: 2.5rem auto; padding: 0 16px; }
        h1 { font-size: 2rem; margin-bottom: .5rem; }
        .intro { color: #4b5563; margin-bottom: 1.5rem; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px,1fr)); gap: 18px; }
        .fine { color: #6b7280; font-size: .9rem; margin-top: 1.25rem; }
      `}</style>
    </>
  );
}
