/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        hunter: "#0f261b",
        cream: "#F7F2E9",
        leaf: "#2b4f3a"
      }
    }
  },
  plugins: [],
};
