/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        UnicaOne: ["Unica One", "cursive"],
      },
      backgroundImage: {
        "hero": 'url("/src/assets/Purple-Lens-Flare-PNG.png")',
      }
    },
  },
  plugins: [],
};
