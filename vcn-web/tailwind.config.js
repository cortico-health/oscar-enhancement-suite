const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: '"Rubik", sans-serif'
      },
      minHeight: {
        '8': '2rem',
        '11': '2.75rem',
        '12.5': '3.125rem',
        '22': '5.5rem'
      },
      minWidth: {
        '8': '2rem',
        '11': '2.75rem',
        '12.5': '3.125rem',
        '22': '5.5rem'
      },
      maxWidth: {
        '8': '2rem',
        '11': '2.75rem',
        '12.5': '3.125rem',
        '22': '5.5rem',
        '40': '10rem',
        '72': '18rem'
      },
      colors: {
        primary: {
          300: '#b5beff',
          500: '#5c70ff', // selected tab/option or primary button color
          600: '#4b54f6', // text and border color in secondary button
          700: '#3842c0' // hover primary button
        },
        secondary: {
          10: '#fafafa', // main body
          20: '#f6f6f6', // communicator body color
          50: '#e1e5ff', // your message cloud
          100: '#eae9f3', // border of buttons and inputs
          200: '#b0b3c9', // icons color and bubble message color
          300: '#585f87', // placeholder colors 
          500: '#131d55' // text color in inputs
        },
        green: {
          10: '#e3fff6',
          100: '#B6F5E2',
          200: '#66E7BF',
          300: '#00D89A',
          400: '#00D287',
          500: '#05a989',
          700: '#0A7672',
          900: '#0e4c66'
        }
      },
      spacing: {
        0.25: '0.06125rem',
        4.5: '1.125rem',
        5.5: '1.375rem',
        12.5: '3.125rem',
        22: '5.5rem',
        26: '6.5rem'
      },
      fontSize: {
        title1: [`${24 / 16}rem`, {
          lineHeight: '28px',
          letterSpacing: '1px'
        }],
        title2: [`${22 / 16}rem`, {
          lineHeight: '26px',
          letterSpacing: '1px'
        }],
        title3: [`${18 / 16}rem`, {
          lineHeight: '21px',
          letterSpacing: '1px'
        }],
        title4: [`${14 / 16}rem`, {
          lineHeight: '17px',
          letterSpacing: '1px'
        }],
        title5: [`${13 / 16}rem`, {
          lineHeight: '15px',
          letterSpacing: '1px'
        }],
        title6: [`${12 / 16}rem`, {
          lineHeight: '14px',
          letterSpacing: '1px'
        }],
        title7: [`${16 / 16}rem`, {
          lineHeight: '19px',
          letterSpacing: '1px'
        }],
        message1: [`${14 / 16}rem`, {
          lineHeight: '22px'
        }],
        contact1 :[`${16 / 16}rem`, {
          lineHeight: '19px',
          letterSpacing: '0.889px'
        }],
        contact2 :[`${14 / 16}rem`, {
          lineHeight: '17px',
          letterSpacing: '0.778px'
        }],
        contact3 :[`${12 / 16}rem`, {
          lineHeight: '14px',
          letterSpacing: '0.699px'
        }],
        select1 :[`${14 / 16}rem`, {
          lineHeight: '17px',
          letterSpacing: '0.889px'
        }],
        select2 :[`${14 / 16}rem`, {
          lineHeight: '17px',
          letterSpacing: '0.778px'
        }],
        select3 :[`${10 / 16}rem`, {
          lineHeight: '12px',
          letterSpacing: '0.778px'
        }],
        button1: [`${18 / 16}rem`, {
          lineHeight: '21px'
        }],
        button2: [`${16 / 16}rem`, {
          lineHeight: '19px'
        }],
        input: [`${16 / 16}rem`, {
          lineHeight: '19px',
          letterSpacing: '0.75px'
        }],
        description: [`${14 / 16}rem`, {
          lineHeight: '26px'
        }],
        h1: [`${22 / 16}rem`, {
          lineHeight: '26px'
        }],
        h2: [`${16 / 16}rem`, {
          lineHeight: '19px'
        }],
        h3: [`${14 / 16}rem`, {
          lineHeight: '17px'
        }],
        h4: [`${14 / 16}rem`, {
          lineHeight: '21px'
        }],
        h5: [`${12 / 16}rem`, {
          lineHeight: '14px'
        }],
        h6: [`${10 / 16}rem`, {
          lineHeight: '12px'
        }]
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    })
  ],
}
