/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  './node_modules/tw-elements/dist/js/**/*.js',
  './src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
  variants: {
    extend: {
      padding: ['hover', 'focus', 'active'],
    }
  },
}
