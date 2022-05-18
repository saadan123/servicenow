module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/src/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
               '1/7': '14.2857143%',
            '2/7': '31.5%',
               '3/7': '42.8571429%',
              '4/7': '57.1428571%',
              '5/7': '71.4285714%',
               '6/7': '85.7142857%',
                },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#032d42',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
      backgroundImage: {
        'hero-pattern': "url(../public/images/image1.jpg)"
      }
  },
  plugins: [],
}}