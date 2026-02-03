module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1f6a58', // deep sage
          light: '#2a8b74',   // lighter sage
          dark: '#174f42',    // deeper sage
          accent: '#88c038',  // logo accent (used for highlights)
        },
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
