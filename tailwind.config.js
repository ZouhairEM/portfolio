/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '400px',
        md: '600px',
        lg: '700px',
        xl: '950px',
      },
    },
    colors: {
      primary: {
        100: '#011e35',
        200: '#011627',
      },
      secondary: '#4196c2',
      tertiary: 'rgba(65, 150, 194, 0.9)',
      white: '#f3e4e4',
      muted: 'hsl(214, 15%, 91%)',
    },
    listStyleType: {
      circle: 'circle'
    }
  },
  plugins: [],
};
