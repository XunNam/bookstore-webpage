/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'baloo-paaji-2': ['"Baloo Paaji 2"', 'sans-serif'],
        'playfair-display': ['"Playfair Display"', 'serif'],
        'eb-garamond': ['"EB Garamond"', 'serif'],
        'lato': ['"Lato"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

