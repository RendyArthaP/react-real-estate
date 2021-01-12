module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif']
    },
    inset: {
      "0": "0px",
      "navbar-mobile": "50px",
      "50": "50px",
      "35": "35px"
    },
    fill: theme => ({
      'red': theme('colors.red.500'),
      'green': theme('colors.green.500'),
      'blue': theme('colors.blue.500'),
      'white': theme('colors.white')
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
