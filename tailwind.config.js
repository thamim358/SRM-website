/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Lato','sans serif'],
        'mono': ['PT Sans Caption', 'sans-serif'],
      },
      spacing: {
        '3px': '60px',
        '4px': '80px',
        '5px': '100px',
      },
      maxWidth: {
        '1/2': '50%',
        '3/4': '75%',
        '4/5': '80%',
        'full1': '10%',
      },
    },
  },
  plugins: [],
}

