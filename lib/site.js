const site = {
  name: 'Wild & Well',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store',
  description:
    'Practical, low-tox wellness guides, simple habits, and vetted product picks.',
  logo: '/logo.svg',
  ogImage: '/og-default.jpg',
  themeColor: '#0f1a0d',
  social: {
    twitter: '', // add if you have it, e.g. '@wildandwell'
    instagram: '',
  },
  nav: [
    { label: 'Guides', href: '/guides' },
    { label: 'Blog', href: '/blog' },
    { label: 'Recommended', href: '/recommended' }
  ],
  legal: [
    { label: 'Disclosure', href: '/disclosure' },
    { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' }
  ],
};

export default site;
