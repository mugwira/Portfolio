/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#25316D",
        navyLight: "#5F6F94",
      },
    },
    fontFamily: {
      dosis: ["Dosis", "sans-serif"],
      quicksand: ["Quicksand", "sans-serif"],
    },
  },
  plugins: [],
};
