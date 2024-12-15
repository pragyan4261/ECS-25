/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0px 17px #0066FF',
        'custom-border': '0px 4px 20px #000000 inset',
      },
      colors: {
        blueNeon: '#33FCFF',
    },
    },
  },
  plugins: [],
};
