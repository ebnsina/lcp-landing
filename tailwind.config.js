const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        rose: colors.rose,
        orange: colors.orange,
        pink: colors.pink,
      },
      fontFamily: {
        heading: ['Poppins'],
        sans: ['Questrial'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
