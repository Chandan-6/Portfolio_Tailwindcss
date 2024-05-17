/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': {'max': '1360px'},

      'xl': {'max': '1279px'},

      'lg': {'max': '1023px'},

      'md': {'max': '767px'},

      'sm': {'max': '639px'},

      'mobile-2' : {'max': '580px'},

      'tablet' : {'max': '940px'},

      'mobile-1' : {'max': '420px'},
      
      'tablet-2' :{'max': '1080px'}
    }
  },
  plugins: [],
}

