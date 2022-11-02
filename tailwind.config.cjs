/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
	content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '481px',
      md: '769px',
      lg: '1025px',
      xl: '1201px',
      '2xl': '1536px',
      '3xl': '1919px'
    },
    extend: {
      colors: {
        222: "#222222",
        FFC: "#FFC43F",
        F1F: "#F1F1F1",
        898: "#898989",
        818: "#818181",
        "9D9":"#9D9D9D",
        DED:"#DEDEDE",
        F6F:"#F6F6F6",
        F8F:"#F8F8F8",
        F9F:"#F9F9F9",
        FFA:"#FFA801",
        F7F:"#F7F7F7",
        FF6:"#FFF6E2",
        FF7:"#FFF7EA",
        E6F:"#E6F3FA",
        ED8:"#ED8939",
        727:"#727272",
        EEF:"#EEF5E4",
        252:"#252525",
        F9E:"#F9ECDE",
        787:"#787878",
        F1F:"#F1F1F1",
        FBF:"#FBFBFB",
        C7C:"#C7C7C7",
        333:"#333333",
        E2E:"#E2E2E2",
        EAE:"#EAEAEA",
        FFE:"#FFEADA",
        E1F:"#E1F7F9",
        777:"#777777",
        BC4:"#BC4B68",
        A8A:"#A8A8A8",
        A3B:"#A3BF4C",
        E9F:"#E9F3F8",
        555:"#555555",
        ECE:"#ECECEC",
        747:"#747474",
        FF9:"#FFF9EB",
        949:"#949494",
        F4F:"#F4F4F4",
        FCF:"#FCF7EB",
        EDE:"#DEDEDE",
      },
      width: {
        13: "52px",
        9.5: "38px",
      },
      height: {
        13: "52px",
        9.5: "38px",
      },
      margin: {
        50: "50px",
        153: "153px"
      },
      padding: {
        "11.5": "42px",
        153: "153px"
      },
      fontSize: {
        31: "31px"
      },
      letterSpacing: {
        "0.04": "0.04em",
        "0.02": "0.02em"
      },
      lineHeight: {
        "22": "22px",
        "225": "225%"
      },
      fontFamily: {
        Josefin: ['Josefin Sans', 'sans-serif'],
        Futura: ['Futura Lt BT', 'sans-serif'],
        OpenSans: ['Open Sans', 'sans-serif'],
        Nunito: ['Nunito', 'sans-serif'],
        Garamond: ['EB Garamond', 'sans-serif'],
      },
      backgroundImage: {
        'luxa-dark-chocolate': "url('../public/images/banners-luxa-dark-chocolate.png')",
      },
    },
  },
  plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				".category-card": {
					background: "#FFFFFF",
          border: "1px solid #FBFBFB",
          "box-shadow": "0px 5px 22px rgba(0, 0, 0, 0.04)",
          "border-radius": "16px",
          // width: "241px",
          height: "245px",
          "&:hover": {
            'box-shadow': "0px 21px 44px rgba(0, 0, 0, 0.08)",
            'border-radius': "12px",
          }
				},
				".new-arrival-card": {
					background: "#FFFFFF",
          border: "1px solid #FBFBFB",
          "box-shadow": "0px 5px 22px rgba(0, 0, 0, 0.04)",
          "border-radius": "16px",
          padding: "16px"
				},
				".trending-product-card": {
          // width: "302px",
          // height: "404px",
					background: "#FFFFFF",
          border: "1px solid #FBFBFB",
          "box-shadow": "0px 5px 22px rgba(0, 0, 0, 0.04)",
          "border-radius": "12px",
          padding: "16px",
            "&:hover" : {
              "box-shadow": "0px 21px 44px rgba(0, 0, 0, 0.08)"
            }
				},
        ".background-leaves": {
          position: "absolute",
          top: "-100px",
          left: 0,
          width: "454.93px",
          height: "409.37px",
        },
        ".article-card": {
          background: "#FFFFFF",
          border: "1px solid #FBFBFB",
          "box-shadow": "0px 5px 22px rgba(0, 0, 0, 0.04)",
          "border-radius": "16px",
          padding: "25px",
        },
        ".social-card": {
          width: "45px",
          height: "45px",
          background: "#FFFFFF",
          border: "1px solid #EFEFEF",
          'box-shadow': "0px 4px 12px rgba(0, 0, 0, 0.03)",
          'border-radius': "4px",
          display: "flex",
          'align-items': "center",
          'justify-content': "center",
          "&:hover" : {
            'box-shadow': "0px 6px 20px rgba(0, 0, 0, 0.1)",
          }
        }
			});
		}),
	],
}
