/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Adjust paths as necessary
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: '1100px', // Updated sm breakpoint
        // You can also add other breakpoints or customize existing ones
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
