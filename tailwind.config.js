const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      xs: '400px',
      base: '500px',
      mid: '600px',
      ...defaultTheme.screens
    },
    extend: {
      fontSize: {
        xs: [
          '14px',
          {
            lineHeight: '17px'
          }
        ],
        base: [
          '16px',
          {
            lineHeight: '19px'
          }
        ],
        sm: [
          '17px',
          {
            lineHeight: '21px'
          }
        ],
        md: [
          '22px',
          {
            lineHeight: '27px'
          }
        ],
        lg: [
          '24px',
          {
            lineHeight: '29px'
          }
        ],
        xl: [
          '40px',
          {
            lineHeight: '48px'
          }
        ]
      },
      colors: {
        highlight: '#F5BD4F',
        bg: '#F5F6FA',
        secondary: 'rgba(11, 25, 45, 0.5)',
        accent: '#FBFBFB',
        primary: {
          blue_dark_1: '#001D6E',
          blue_dark_2: '#0544DD',
          blue_dark_3: '#1A439B',
          blue_dark_4: '#36517B',
          blue_light_1: '#C4DDFF',
          blue_light_2: '#EEF5FF',
          blue_light_3: '#7FB5FF',
          blue_light_4: 'rgba(196, 221, 255, 0.2)',
          green_dark_1: '#3CC13B',
          grey: '#C9CFDF',
          grey_light: ' #868B9F',
          danger: '#F03738',
          warning: '#F3BB1C',
          success: '#3CC13B'
        }
      }
    }
  },
  plugins: [require('tailwind-scrollbar')]
}
