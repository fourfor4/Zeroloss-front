// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'sm': '576px',

      'md': '768px',

      'lg': '992px',

      'xl': '1200px',

      '2xl': '1600px',
    },
    container: {
      center: true,
      padding: '0.5rem',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [function ({ addComponents }) {
    addComponents({
      '.container': {
        // maxWidth: '100%',
        '@screen sm': {
          maxWidth: '540px',
        },
        '@screen md': {
          maxWidth: '720px',
        },
        '@screen lg': {
          maxWidth: '960px',
        },
        '@screen xl': {
          maxWidth: '1140px',
        },
      }
    })
  }],
}