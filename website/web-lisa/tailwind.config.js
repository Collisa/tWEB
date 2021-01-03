module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       colors: {
        purplepink: {
          400: '#FF00D6',
          500: '#753A88',
          600: '#4F4E9B',
        },
        gray: {
          950: '#262626',
          960: '#171717',
        },
        teal: {
          500: '#22ebdf',
        },
        orange: {
          500: '#FF7A00',
        },
        lime: {
          500: '#9EFF00',
        }
      },
      fontFamily: {
        'montserrat': ['Montserrat Alternates'],
      },
      spacing: {
           '128': '32rem',
           '150': '37.5rem',
           '172': '43rem',
           '200': '50rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
