/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          md: '1rem',
          lg: '1.5rem',
          xl: '2rem',
          '2xl': '4rem',
        }
      },

    },
  },
  darkMode: 'class',
  plugins: [],
}