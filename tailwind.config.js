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
        "main-orange": "#F86F03",
        "main-bg": "#FFF6F4",
        "main-yellow": "#FFA41B",
        "main-brown": "#FFBF83",
        "unavailable-blue": "#7E95A5",
        "unavailable-gray": "#374046",
      },
      zIndex: {
        "-1": "-1",
      },
      blur: {
        xs: "2px",
      },
      width: {
        update_w: "calc(100% - 24rem)",
      },
      border: {
        px_1: "1px",
      },
    },
  },
  plugins: [],
};
