import AffiliateLink from "./AffiliateLink";
import ComparisonTable from "./ComparisonTable";

// Fallback: any Capitalized tag not explicitly provided becomes a harmless <div>
const mdxProxy = new Proxy({}, {
  get(_t, prop) {
    if (typeof prop === "string" && /^[A-Z]/.test(prop)) {
      // eslint-disable-next-line react/display-name
      return (p) => <div {...p} />;
    }
    return undefined;
  }
});

const mdxComponents = {
  a: (props) => <a {...props} target="_blank" rel="noopener noreferrer" />,
  AffiliateLink,
  ComparisonTable,
  ...mdxProxy
};

export default mdxComponents;
