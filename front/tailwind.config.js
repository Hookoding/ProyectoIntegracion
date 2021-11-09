module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'SDR': 'url(https://www.reddearboles.org/nwlib6/includes/phpthumb/phpThumb.php?src=/imagenes/RSE.png&w=700&f=png)'
      }
    },
  },
  variants: {
    extend: {
      transform: ['focus']
    },
  },
  plugins: [],
}
