/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dev-blue': '#0079FF',
      lightMode: {
        'white': '#FEFEFE',
        'light-gray': '#F6F8FF',
        'gray': '#697C9A',
        'medium-gray': '#4B6A9B',
        'black': '#2B3442',

      },
      darkMode:{
        'black':'#141D2F',
        'darkblue':'#1E2A47',
        'white': '#FFFFFF',
      }
    },
    fontFamily: {
      'spacemono': ['Space Mono', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
}

