/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily:{
        sans:['Poppins', 'sans-serif']
      },
      colors:{
        gray:{
          500: '#1B1B1B'
        },
        blue:{
          300:'#9CC4B2'
        },
        purple:{
          300:'#D5BBB1',
          500:'#8257E5'
        },
        pink:{
          300:'#E76D83'
        }
      }
    },
  },
  plugins: [],
}
