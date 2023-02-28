/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../*.{html,js}", './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {

      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        bootstrap: {
          gray: '#212529', /* para el header y el footer */
          info:'#54B4D3',
        }
      }

    },
  },
  plugins: [],
}
