import SEO from "../../components/SEO";

export default function Disclosure() {
  return (
    <>
      <SEO title="Affiliate Disclosure" description="Our site uses affiliate links. Here's how it works." path="/disclosure/" />
      <main className="container" style={{padding:'18px 0 28px'}}>
        <h1>Affiliate Disclosure</h1>
        <p className="prose">
          Wild & Well participates in affiliate programs, including the Amazon Services LLC Associates Program. This means we may earn a small commission if you purchase through our links—at no extra cost to you. We only recommend items we believe add real value.
        </p>
      </main>
    </>
  );
}
