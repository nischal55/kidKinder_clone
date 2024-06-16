/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Nunito :  ['"Nunito"', ...defaultTheme.fontFamily.serif],
        handlee: ['Handlee', 'cursive'],
      },
      screens: {
        /* we should start with mobile. */
        sm: "576px", // mobile landscape mode
        md: "1024px", // tablet
        lg: "1024px", // latptop without side numerical in keypad
        xl: "1280px", // normal desktop 188
        xxl: "1400px", // huge monitor  210
      },
    },
  },
  plugins: [],
}

