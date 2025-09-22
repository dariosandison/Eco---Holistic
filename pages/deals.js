// /pages/deals.js
import SEO from "@/components/SEO";

export default function DealsPage() {
  return (
    <>
      <SEO
        title="Deals"
        description="Editor-picked health, wellness, and eco product deals with affiliate disclosure."
        canonicalPath="/deals"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Deals", url: "/deals" },
        ]}
      />
      {/* existing Deals page JSX below */}
      {/* ...your current JSX remains unchanged... */}
    </>
  );
}
