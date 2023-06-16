/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html', './build/js/*.js'],
  theme: {
    extend: {
      colors: {
        main: {
          main100: '#009ee3',
          main040: '#a1d9f7',

        },        
        secondary: {
          blue030: '#1f3c48',
          blue070: '#3C88C8',
          black060: '#878786',
          black030: '#c6c6c5',
          black000: '#ececec',
        },        
      },
      screens: {
        'widescreen': {'raw':'(min-aspect-ratio: 3/2)'},
        'tallscreen': {'raw':'(max-aspect-ratio: 13/20)'},
      },
      keyframes: {
        'open-menu': {
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.2)'},
          '100%': {transform: 'scaleY(1)'},
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

