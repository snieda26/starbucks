/** @type {import('tailwindcss').Config} */

const constants = {
  red: '#f23c3d',
  green: '#008d64',
  'dark-green': '#006044',
  'light-green': '#e6f2ef',
  black: '#222222',
  'light-gray': '#e8e7e3',
  white: '#ffffff',
  beige: 'a49b8f'
}


module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  colors: {
    red: '#f23c3d',
    green: '#008d64',
    'dark-green': '#006044',
    'light-green': '#e6f2ef',
    black: '#222222',
    'light-gray': '#e8e7e3',
    white: '#ffffff',
    beige: 'a49b8f'
  },
  extend: {
    colors: { ...constants }
  },
  theme: {

    extend: {
      colors: { ...constants }
    },
  },
  // plugins: [
  //   require('@tailwindcss/forms'),
  //   require('@tailwindcss/aspect-ratio')
  // ],
}
