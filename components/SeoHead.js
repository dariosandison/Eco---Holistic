// components/SeoHead.js
// Shim that keeps old imports working while delegating to the new canonical SEO component.

import SEO from './SEO';

/**
 * Drop-in replacement for the old SeoHead.
 * Accepts the same props your pages already pass (title, description, url, image, etc.)
 * and forwards them to the canonical <SEO /> component.
 */
export default function SeoHead(props) {
  return <SEO {...props} />;
}

// (No named exports on purpose — keep the surface identical to the old default export.)
