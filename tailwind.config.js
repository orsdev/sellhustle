const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      base: '500px',
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
        ]
      },
      colors: {
        highlight: '#F5BD4F',
        bg: '#F5F5F5',
        secondary: '#0B192D',
        accent: '#FBFBFB',
        primary: {
          deep_1: '#001D6E',
          deep_2: '#0544DD',
          light_1: '#C4DDFF',
          light_2: '#EEF5FF',
          light_3: '#7FB5FF'
        }
      }
    }
  },
  plugins: [require('tailwind-scrollbar')]
}
