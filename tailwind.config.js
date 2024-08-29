/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#60a5fa",
        light: "#64748b",
        dark: "#172554",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
