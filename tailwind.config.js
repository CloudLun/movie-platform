/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'red': '#FC4747',
        'dark-blue': '#10141E',
        'semi-dark-blue': "#161D2F",
        'greyish-blue': '#5A698F',
      }
    },
  },
  plugins: [],
}
