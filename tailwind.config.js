// tailwind.config.js
export default {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./layouts/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./app/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wild: {
          green: "#0D3B2E",
          cream: "#FAF3E7",
        },
      },
    },
  },
  plugins: [],
};
