/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '225': '2.25',
      },
      fontSize: {
        '12xl': '10rem'
      }
    },
  },
  plugins: [],
}