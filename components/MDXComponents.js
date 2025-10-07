// components/MDXComponents.js
import React from "react";
import AffiliateLink from "./AffiliateLink";
import ComparisonTable from "./ComparisonTable";

const Anchor = (props) => (
  <a {...props} rel={props.rel || "noopener"} target={props.target || "_blank"} />
);

export const mdxComponents = {
  a: Anchor,
  AffiliateLink,
  ComparisonTable,
  table: (p) => <table {...p} className={"prose-table " + (p.className || "")} />,
  th: (p) => <th {...p} className={"prose-th " + (p.className || "")} />,
  td: (p) => <td {...p} className={"prose-td " + (p.className || "")} />,
};

export default mdxComponents;
