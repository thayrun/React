/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      handjet: ['Handjet', 'cursive'],
      dosis: ['Dosis', 'sans-serif'],
      abel: ['Abel', 'sans-serif'],
    },
  },
  plugins: [],
};