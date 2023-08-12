/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lobsterTwo: ['Lobster Two', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
      screens: {
        xs: '480px',
        ss: '620px',
        sm: '768px',
        md: '1060px',
        lg: '1200px',
        xl: '1700px',
      },
      colors: {
        dimWhite: 'rgba(255, 255, 255, 0.7)',
      },
    },
  },
  plugins: [],
};
