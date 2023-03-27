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
        148: '37rem',
        172: '48rem',
      },
    },
  },
  plugins: [],
};
