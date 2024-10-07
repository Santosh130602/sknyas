/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        lg1100: '1100px', // Custom breakpoint at 1100px
      },
    },
  },
  plugins: [],
}

// tailwind.config.js

