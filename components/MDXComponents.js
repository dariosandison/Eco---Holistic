// components/MDXComponents.js
import AffiliateLink from "./AffiliateLink";
import ComparisonTable from "./ComparisonTable";

const Passthrough = (props) => <div {...props} />;

/** Components mapping for MDXRemote to prevent “X is not defined” crashes */
const mdxComponents = {
  AffiliateLink,
  ComparisonTable,

  // Safety nets for occasional stray tags found in content
  Thing: Passthrough,
  Audience: Passthrough,
};

export default mdxComponents;

