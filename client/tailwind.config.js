/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: "#f1fcf1",
          100: "#defae0",
          200: "#bef4c2",
          300: "#8bea93",
          400: "#4bd558",
          500: "#2abd38",
          600: "#1d9c2a",
          700: "#1a7b24",
          800: "#1a6122",
          900: "#17501f",
          950: "#072c0c",
        },
      },
      backgroundImage: {
        "hero-pattern": "url('./assets/bg.svg')",
      },
    },
  },
  plugins: [],
};
