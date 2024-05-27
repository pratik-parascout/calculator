/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        128: '600px',
      },
      colors: {
        nearRed: '#A91D3A',
        almostBlack: '#141414',
        textColor: 'rgba(255, 255, 255, 0.3)',
        textColor1: 'rgba(255, 255, 255, 0.5)',
        textColor3: 'rgba(255, 255, 255, 0.2)',
        textColor4: 'rgba(255, 255, 255, 0.08)',
        textColor2: '#1d1d1d',
        bg2: '#00ff62',
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(#161616 1px, transparent 1px), linear-gradient(to right, #161616 1px, #0f0f0f 1px)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-none': {
          'scrollbar-width': 'none' /* For Firefox */,
          '-ms-overflow-style': 'none' /* For Internet Explorer and Edge */,
        },
        /* For WebKit-based browsers like Chrome and Safari */
        '.scrollbar-none::-webkit-scrollbar': {
          display: 'none',
        },
      }

      addUtilities(newUtilities)
    },
  ],
}
