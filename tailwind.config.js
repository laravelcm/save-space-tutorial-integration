const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F6F9FF',
          200: '#DDE6FC',
          500: '#0247FE',
          700: '#023BD4',
          gray: '#444444',
        }
      },
      fontFamily: {
        sans: ['Manrope', ...fontFamily.sans],
      },
      fontSize: {
        '4.5xl': '2.625rem',
      }
    },
  },
  plugins: [],
}
