/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#002b28",
        grey: "#ecefed",
        red: "#ea0b2c",
        "light-theme": "#A6A7AF",
        "dark-theme": "#231F20",
      },
      screens: {
        mobile: "900px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
