import SEO from '../components/SEO';
import ProductCard from '../components/ProductCard';

export default function Recommended() {
  const items = [
    {
      title: "Organic Herbal Tea Sampler",
      description: "Caffeine-free blends for sleep, digestion, and calm evenings.",
      image: "https://m.media-amazon.com/images/I/61s0O5o3zQL._AC_SL1000_.jpg",
      href: "https://www.amazon.co.uk/dp/B07S44J4Y3",
      badge: "Editor’s Pick",
      price: "From £14–£22",
      rating: 5
    },
    {
      title: "Ceramic Essential Oil Diffuser",
      description: "Minimal diffuser for cozy, plant-friendly rooms.",
      image: "https://m.media-amazon.com/images/I/61Qxq6N3v3L._AC_SL1500_.jpg",
      href: "https://www.amazon.co.uk/dp/B07L5GDTYY",
      badge: "Aromatherapy",
      price: "£25–£40",
      rating: 4
    },
    {
      title: "Insulated Stainless Steel Water Bottle",
      description: "Ditch plastic—keeps drinks cold 24h, hot 12h.",
      image: "https://m.media-amazon.com/images/I/61Yp-6b6S2L._AC_SL1500_.jpg",
      href: "https://www.amazon.co.uk/dp/B07KQX3H8R",
      badge: "Sustainable",
      price: "£18–£30",
      rating: 5
    }
  ];

  return (
    <>
      <SEO title="Recommended • Wild & Well" path="/recommended" />
      <main className="container">
        <div className="hero">
          <span className="kicker">Curated Picks</span>
          <h1>Recommended Products</h1>
          <p className="muted">Practical, low-additive, lower-waste items we like for daily living.</p>
        </div>

        <section className="grid-cards">
          {items.map(it => <ProductCard key={it.title} {...it} />)}
        </section>

        <p style={{color:'#6b7280',fontSize:'.9rem',marginTop:'1rem'}}>
          <small>Some links may be affiliate links. As an Amazon Associate, we earn from qualifying purchases.</small>
        </p>
      </main>
    </>
  );
}
