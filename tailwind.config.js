/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          'scrollbar-bg': '#ffffff', // white background
          'scrollbar-thumb': '#0000ff', // blue thumb
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-thin': {
          '::-webkit-scrollbar': {
            width: '8px',
          },
          '::-webkit-scrollbar-track': {
            background: '#ffffff',
          },
          '::-webkit-scrollbar-thumb': {
            background: '#0000ff',
            borderRadius: '8px',
          },
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}