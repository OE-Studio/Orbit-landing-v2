/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'polysans-regular': ["PolySans Neutral"],
        'polysans-slim': ["PolySans Slim"],
        'clash-medium': ["ClashGrotesk-Medium"],
        'polysans-semibold': ["PolySans Median"],
        'polysans-bold': ["PolySans Bulky"],
        'inter':["Inter"],
        'geist':["GeistVariable"]
      },
    },
  },
  plugins: [],
}

