/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue':{
          100: '#65E9E4#',
          200: '#31C3BD', 
          300: '#1F3641',
          400: '#1A2A33',
        },
        'yellow':{
          100:'#FFC860',
          200:'#F2B137',
        },
        'gray':{
          100:'#DBE8ED',
          200:'#A8BFC9',
        },
      },

      backgroundImage:{
        'o': 'url("./src/assets/icons/icon-o.svg")',
        'o_outline': 'url("./src/assets/icons/icon-o-outline.svg")',
        'x': 'url("./src/assets/icons/icon-x.svg")',
        'x_outline': 'url("./src/assets/icons/icon-x-outline.svg")',
        'restart': 'url("./src/assets/icons/icon-restart.svg")',
        'logo': 'url("./src/assets/icons/logo.svg")',
      }
    },
  },
  plugins: [
    require("./src/theme/image.js"),
    require("./src/theme/tablero.js")
  ],
}
