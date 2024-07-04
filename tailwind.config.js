/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-blue": "#0a3955",
        "lightgreen": "#A7EA2D",
        "light-gray" : "#BBE1FA",
        "unavailable-green" : "#79A12E",
        "unavailable-blue" : "#7E95A5",
        "unavailable-gray" : "#374046",
      },
    },
  },
  plugins: [],
};
