/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "ui-system"],
      },
      colors: {
        primary: "#1B2021",
        secondary: "#828282",
        orange: "#F58634",
      },
    },
  },
  plugins: [],
};
