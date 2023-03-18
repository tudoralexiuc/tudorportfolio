/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'olive-green': '#616F39',
        'about-me': '#A18276',
        'my-resume': '#AAC0AA',
        'personal-project': '#BBC9FC',
        'international-project': '#FFB677',
        'group-project': '#FF8364',
      },
    },
    screens: {
      lg: { max: '1700px' },

      md: { max: '1200px' },

      sm: { max: '1023px' },
    },
  },
  plugins: [],
};
