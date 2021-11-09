module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'mentor': 'url(https://analyticsindiamag.com/wp-content/uploads/2020/05/Mentorship.jpg)'
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
