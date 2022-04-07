const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: colors.blue,
      slate: colors.slate,
      white: colors.white,
      gray: colors.gray,
      green: colors.green,
      // red: colors.red,
      // yellow: colors.yellow,
      // orange: colors.orange,
      // purple: colors.purple,
      // pink: colors.pink,
      // teal: colors.teal,
      // cyan: colors.cyan,
      // indigo: colors.indigo,
      // violet: colors.violet,
    },

  },
  plugins: [],
}
