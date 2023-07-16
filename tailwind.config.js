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
        sm: '300px',
        md: '428px',
        lg: '684px',
        xl: '1040px',
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
    },
  },
  plugins: [],
};
