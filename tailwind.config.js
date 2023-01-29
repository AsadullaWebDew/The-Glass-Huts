/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
    width:{
      mx: '1408px',
      xxl: '100%',
      xl: '541px'
    },
    height:{
      mh: '100px',
      xs: '25px'
    },
    colors:{

    },

    margin:{
      xl: '18px',
      ml: '36px',
      
    },
    opacity:{
      xl: '1'
    },
    borderRadius:{
      half: '50&'
    },
    backgroundColor:{
      white: '#FFFFFF',
      buttomColor: '#5B6460',
      grey: '#E9ECE0',
      slo: '#E9ECE0',
      transparent: 'transparent',
    } ,
    backgroundImage:{
      headerImg: "url('/imgs/bgImg.png')",
      heroPattern: "url('./imgs/bgImg.png')",
    },
    fontFamily:{
      openSans: ["'Open Sans', sans-serif;"]
    }
  },
  plugins: [],
  // fontFamily:{
  //   open: ["'Open Sans', sans-serif;"],
  //   solitreo: ["'Solitreo', cursive;"]
  // }

}
