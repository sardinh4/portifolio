/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Poppins', 'Arial', 'sans-serif'],
      },
     
      colors:{
        'main' : '#00cc99',
        'cinza': '#1f242d',
        'cinza-claro' : '#323946',
      },

      boxShadow: {
        'custom': '0 0 1rem #00cc99',
      },


    },
  },
  plugins: [],
}