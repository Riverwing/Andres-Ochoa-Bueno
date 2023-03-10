/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../clubs.html", "../palas.html", "../about.html"],
  theme: {
    extend: {

      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        bootstrap: {
          gray: '#212529', /* para el header y el footer */
          info: '#54B4D3',
          letra: '#8A8C8E'
        }
      },

      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '4rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },

      textUnderlineOffset: {
        3: '3px',
      }

    },
  },
  variants: {
    extend: {
      display: ['group-focus']
    },
  },
  plugins: [    
  ],
}
