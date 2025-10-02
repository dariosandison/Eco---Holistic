// site.config.js
const site = {
  name: 'Wild & Well',
  url: 'https://www.wild-and-well.store',
  locale: 'en_US',
  themeColor: '#C9D8B6',
  twitter: '@wildandwell',
  author: 'Wild & Well',
  brand: {
    logo: '/logo.svg',
    favicon: '/favicon.ico'
  },
  nav: [
    { href: '/guides', label: 'Guides' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/blog', label: 'Blog' },
    { href: '/deals', label: 'Deals' }
  ],
  footer: {
    disclaimer: 'Affiliate links may earn us a commission at no extra cost to you.'
  },
  seoDefaults: {
    title: 'Wild & Well',
    description: 'Evidence-guided guides, reviews, and wellness picks.',
    image: '/og-default.jpg'
  }
};
export default site;
