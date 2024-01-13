/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bright-blue': 'hsl(220, 98%, 61%)',
        'check-bg-start': 'hsl(192, 100%, 67%)',
        'check-bg-end': 'hsl(280, 87%, 65%)',
        'light-theme': {
          'very-light-gray': '#FAFAFA',
          'very-light-white': '#FFFFFF',
          'light-grayish-blue': '#E3E4F1',
          'medium-grayish-blue': '#D1D2DA',
          'dark-grayish-blue': '#9495A5',
          'very-dark-grayish-blue': '#494C6B',
        },
        'dark-theme': {
          'very-dark-blue': '#171823',
          'dark-desaturated-blue': '#25273D',
          'medium-grayish-blue-hover': '#393A4B',
          'light-grayish-blue': '#C8CBE7',
          'dark-grayish-blue': '#5B5E7E',
          'very-dark-grayish-blue': '#4D5067',
        }
      },
      // Setting custom fonts
      fontFamily: {
        'josefin': ['Josefin Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}

