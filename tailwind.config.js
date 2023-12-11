/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./src/**/**/*.{html,js}"],
  theme: {
    extend : {
      colors : {
        primary : {
          100 : "#F1F8FF",
          300 : "#7EBFFF",
          500 : "#2987E5",
          600 : "#0F3A65",
          900 : "#081725",
        },
        gray : {
          100 : "#FAFAFA",
          200 : "#F3F3F3",
          500 : "#E4E4E4",
          700 : "#A8ABB4",
          900 : "#1E1E1E"
        },
        secondary : {
          100 : "#EDFFF4",
          500 : "#73D697",
        }
      },
      height : {
        input : "56px",
        btn : "56px",
        fixedbtnmodal : "88px"
      }
    }
  },
  plugins: [],
}
