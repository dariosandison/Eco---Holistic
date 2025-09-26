// site.config.js
const domain = 'https://wildandwell.example'; // ← set your real domain
module.exports = {
  name: 'Wild & Well',
  shortName: 'Wild & Well',
  domain,
  twitter: '@wildandwell', // optional
  defaultTitle: 'Wild & Well — Holistic Guides, Clean Products & Deals',
  defaultDescription:
    'Actionable wellness guides, low-tox picks, and vetted deals to live wild & well.',
  defaultImage: `${domain}/og-default.jpg`, // put a 1200x630 in /public
  color: '#C9D8B6',
};

