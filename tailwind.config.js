/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html', './build/js/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'bali': "url('/build/img/bali.jpg')",
        'chicago': "url('/build/img/chicago.jpg')",
        'europe': "url('/build/img/europe.jpg')",
        'iceland': "url('/build/img/iceland.jpg')",
        'LA': "url('/build/img/LA.jpg')",
        'miami': "url('/build/img/miami.jpg')",
        'new_york': "url('/build/img/new_york.jpg')",
        'norway': "url('/build/img/norway.jpg')",
        'sanFrancisco': "url('/build/img/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('/build/img/sanFranciscoDesktop.jpg')",
        'seattle': "url('/build/img/seattle.jpg')",
        'switzerland': "url('/build/img/switzerland.jpg')",
        'sydney': "url('/build/img/sydney.jpg')",
        'yosemite': "url('/build/img/yosemite.jpg')",
        'twitter': "url('https://img.icons8.com/?size=1x&id=7ZqBjBwWjYmU&format=gif')",        
      },
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
      },
    },
  },
  plugins: [],
}

