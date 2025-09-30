// components/mdx-shortcodes.js
import ProsCons from './ProsCons';
import FAQBlock from './FAQBlock';
import CTABox from './CTABox';
import RelatedPosts from './RelatedPosts';
import ABText from './ABText';
import ABCTA from './ABCTA';

// Usage: pass this object to your MDX renderer (e.g., next-mdx-remote's components prop)
const shortcodes = {
  ProsCons,
  FAQ: FAQBlock,
  CTA: CTABox,
  Related: RelatedPosts,
  ABText,
  ABCTA,
};

export default shortcodes;
export { ProsCons, FAQBlock, CTABox, RelatedPosts, ABText, ABCTA };

