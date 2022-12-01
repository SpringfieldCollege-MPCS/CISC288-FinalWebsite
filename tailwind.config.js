/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html", "./theme/**/*.html",  "./themes/"],
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '769px',
    //   xl: '1440px',
    // },


    extend: {
      fontFamily: {
                'myCustomFont': ['Anek Devanagari', 'sans-serif'], // class name of font used in HTML: ['name of font', 'backup font']
            },
      // colors: {
      //   'teal': {
      //       100: "#d2f0ff",
      //       200: "#a5e2ff",
      //       300: "#79d3ff",
      //       400: "#4cc5ff",
      //       500: "#1fb6ff",
      //       600: "#1992cc",
      //       700: "#136d99",
      //       800: "#0c4966",
      //       900: "#062433"
      //     }
      // },
    }
  },
  variants: {},
  plugins: [
      require('@tailwindcss/typography'),
  ],
};