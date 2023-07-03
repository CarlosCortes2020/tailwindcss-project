/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html', './build/js/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'bali': "url('https://cdn.pixabay.com/photo/2021/01/27/13/47/cliff-5954980_1280.jpg')",
        'chicago': "url('https://cdn.pixabay.com/photo/2016/11/06/23/51/buildings-1804479_1280.jpg')",
        'europe': "url('https://cdn.pixabay.com/photo/2017/12/10/17/40/prague-3010407_1280.jpg')",
        'iceland': "url('https://cdn.pixabay.com/photo/2017/08/07/23/11/iceland-2608985_1280.jpg')",
        'LA': "url('https://cdn.pixabay.com/photo/2017/09/06/19/51/holywood-2722760_1280.jpg')",
        'miami': "url('https://cdn.pixabay.com/photo/2012/06/23/02/22/miami-50553_1280.jpg')",
        'new_york': "url('https://cdn.pixabay.com/photo/2017/08/31/05/36/buildings-2699520_1280.jpg')",
        'norway': "url('https://cdn.pixabay.com/photo/2018/10/04/11/12/waterfall-3723422_1280.jpg')",
        'sanFrancisco': "url('https://cdn.pixabay.com/photo/2017/03/18/14/56/panorama-2154194_1280.jpg')",
        'sanFranciscoDesktop': "url('https://cdn.pixabay.com/photo/2016/08/31/11/30/transamerica-pyramid-1633202_1280.jpg')",
        'seattle': "url('https://cdn.pixabay.com/photo/2014/08/11/21/44/seattle-416065_1280.jpg')",
        'switzerland': "url('https://cdn.pixabay.com/photo/2015/07/27/17/14/mountains-862870_1280.jpg')",
        'sydney': "url('https://cdn.pixabay.com/photo/2019/03/04/14/35/sydney-4034244_1280.jpg')",
        'yosemite': "url('https://cdn.pixabay.com/photo/2016/11/23/18/00/yosemite-national-park-1854097_1280.jpg')",
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

