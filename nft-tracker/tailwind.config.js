module.exports = {
  content: [
    "./src/**/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      /** Add custom colours */
      colors:{
        back: '#01204C',
        bue:'#2CA0E2'
      },
      /** Add custom fonts */
      fontFamily:{
        Titillium: ["Titillium Web", "sans-serif"],
        Alethia: ["Alethia Next", "sans-serif"],
        Fahkwang: ["Fahkwang", "sans-serif"]
      },
    },
  },
  plugins: [],
}
