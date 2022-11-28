/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        dark: 'hsl(12, 88%, 59%)',
        lightDark: 'hsl(252,8.77%,11.18%)',
        lightBlue: 'hsl(144,42.06%,79.02%)',
        lightYellow: 'hsl(46.67,100%,85.88%)',
        veryLightYellow:'#F8F7F1',
        lightRose: 'hsl(10,96.77%,87.84%)',
        veryLightRose: 'hsl(43.64,45.83%,90.59%)',
        darkGray: 'hsl(227, 12%, 61%)',
        lightGray: 'hsl(210,11.11%,96.47%)',
      },
    },
  },
  plugins: [],
}
