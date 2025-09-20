import SEO from '../components/SEO';
import ProductCard from '../components/ProductCard';

export default function Deals() {
  const items = [
    {
      title: "Bamboo Toothbrush (10-pack)",
      description: "Compostable handles, soft bristles—easy swap.",
      image: "https://m.media-amazon.com/images/I/71s1h8M0gUL._AC_SL1500_.jpg",
      href: "https://www.amazon.co.uk/dp/B07V26G3K9",
      badge: "Low-Waste",
      price: "£8–£12",
      rating: 4
    },
    {
      title: "Countertop Compost Bin",
      description: "Odor control with replaceable charcoal filter.",
      image: "https://m.media-amazon.com/images/I/61m9x5s8rSL._AC_SL1500_.jpg",
      href: "https://www.amazon.co.uk/dp/B00GM5P05O",
      badge: "Kitchen",
      price: "£20–£35",
      rating: 4
    }
  ];

  return (
    <>
      <SEO title="Deals • Wild & Well" path="/deals" />
      <main className="container">
        <div className="hero">
          <span className="kicker">Fresh Finds</span>
          <h1>Deals & Limited Picks</h1>
          <p className="muted">Occasional discounts on items that fit our criteria.</p>
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
