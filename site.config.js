// site.config.js
const site = {
  name: 'Wild & Well',
  url: 'https://example.com', // <- set your canonical domain
  locale: 'en_US',
  themeColor: '#C9D8B6',
  twitter: '@wildandwell',     // optional
  author: 'Wild & Well',

  brand: {
    logo: '/logo.svg',
    favicon: '/favicon.ico',
  },

  nav: [
    { href: '/guides', label: 'Guides' },
    { href: '/blog', label: 'Blog' },
    { href: '/deals', label: 'Deals' },
    { href: '/contact', label: 'Contact' },
  ],

  footer: {
    disclaimer: 'Affiliate links may earn us a commission at no extra cost to you.',
  },

  seoDefaults: {
    title: 'Wild & Well',
    description: 'Evidence-guided guides, reviews, and wellness picks.',
    image: '/og/default-og.png', // add this file when you can
  },
};

export default site;
