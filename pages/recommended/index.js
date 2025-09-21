import SEO from "../../components/SEO";
import TopPicks from "../../components/TopPicks";

export default function Recommended() {
  const items = [
    {
      title: "Insulated Stainless Steel Water Bottle",
      description: "Ditch plastic—keeps drinks cold 24h, hot 12h.",
      image: "https://m.media-amazon.com/images/I/61Yp-6b6S2L._AC_SL1500_.jpg",
      href: "https://www.amazon.co.uk/dp/B07KQX3H8R",
      badge: "Sustainable",
      price: "£18–£30"
    },
    {
      title: "Ceramic Essential Oil Diffuser",
      description: "Minimal diffuser for cozy, plant-friendly rooms.",
      image: "https://m.media-amazon.com/images/I/61Qxq6N3v3L._AC_SL1500_.jpg",
      href: "https://www.amazon.co.uk/dp/B07L5GDTYY",
      badge: "Aromatherapy",
      price: "£25–£40"
    },
    {
      title: "Bamboo Toothbrush (Pack of 10)",
      description: "Compostable handles, soft bristles—lower waste daily.",
      image: "https://m.media-amazon.com/images/I/71s1h8M0gUL._AC_SL1500_.jpg",
      href: "https://www.amazon.co.uk/dp/B07V26G3K9",
      badge: "Low-Waste",
      price: "£8–£12"
    }
  ];

  return (
    <>
      <SEO title="Recommended Products" description="Curated eco-friendly and holistic health products we actually like." path="/recommended/" />
      <main className="container" style={{padding:'18px 0 28px'}}>
        <h1 style={{marginBottom:8}}>Recommended</h1>
        <p style={{color:'#4b5563'}}>Curated products that fit an eco-friendly, holistic lifestyle. Some links are affiliate links which may earn us a small commission at no extra cost to you.</p>
        <TopPicks picks={items} />
      </main>
    </>
  );
}
