// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          50:  "#f6f7f3",
          100: "#e7eadf",
          200: "#cfd6bf",
          300: "#b1bc98",
          400: "#8fa06f",
          500: "#6f8550",   // primary
          600: "#5a6b40",
          700: "#465435",
          800: "#2f3924",
          900: "#1d2416"
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.slate.800"),
            "--tw-prose-headings": theme("colors.olive.700"),
            "--tw-prose-links": theme("colors.olive.600"),
            "--tw-prose-bullets": theme("colors.olive.500"),
            "--tw-prose-quotes": theme("colors.olive.700"),
            a: { textDecoration: "underline" },
            h1: { fontWeight: "700" },
            h2: { fontWeight: "700" },
            h3: { fontWeight: "600" }
          }
        }
      })
    }
  },
  plugins: [require("@tailwindcss/typography")]
};

