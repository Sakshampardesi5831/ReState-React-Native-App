/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
        rubik:["Rubik-Regular","sans-serif"],
        rubikMedium:["Rubik-Medium","sans-serif"],
        rubikBold:["Rubik-Bold","sans-serif"],
        rubikBlack:["Rubik-Black","sans-serif"],
        rubikExtraBold:["Rubik-ExtraBold","sans-serif"],
        rubikLight:["Rubik-Light","sans-serif"],
        rubikSemiBold:["Rubik-SemiBold","sans-serif"],
      },
      colors:{
        "primary":{
          100:"#0061FFA",
          200:"#0061FF1A",
          300:"#0061FF",
        },
        accent:{
          100:"#FBFBFD",
        },
        black:{
          DEFAULT:"#000000",
          100:"#8C8E98",
          200:"#666876",
          300:"#191d31",
        },
        danger:{
          DEFAULT:"#F75555",
        },
      }
    },
  },
  plugins: [],
}