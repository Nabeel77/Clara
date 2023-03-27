/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          dark: '#1A232E',
        },
      },
      width: {
        112: '28rem',
      },
      height: {
        80: '20rem',
        148: '37rem',
        172: '48rem',
        '11/12': '90%',
      },
    },
  },
  plugins: [],
};
