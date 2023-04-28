/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0B2447',
        'lgray': '#E6E6E6',
        'test': '#E3CCAE',
        'dgray': '#555555'

      },
      fontFamily: {
        'mont': ['Montserrat', 'sans-serif'],
        'rob': ['Roboto', 'sans-serif'],

      },
    }
  },
  plugins: [],
}
