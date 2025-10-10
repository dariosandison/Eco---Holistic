module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}','./components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0f766e', // teal-700
          light: '#14b8a6',   // teal-500
          dark: '#115e59',    // teal-800
          accent: '#84cc16'   // lime-400 for subtle accents
        }
      },
      borderRadius: {
        '2xl': '1rem',
      }
    }
  },
  plugins:[require('@tailwindcss/typography')]
}
