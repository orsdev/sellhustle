/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontSize: {
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
        lg: [
          '24px',
          {
            lineHeight: '29px'
          }
        ]
      },
      colors: {
        highlight: '#F5BD4F',
        bg: '#FFFFFF',
        secondary: '#0B192D',
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
  plugins: []
}
