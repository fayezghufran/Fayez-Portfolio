/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // This line ensures Tailwind scans all JS/JSX/TS/TSX files inside the src folder.
    './public/index.html', // For the main HTML file in a React app.
  ],
  theme: {
    extend: {
      colors: {
        bg: '#ffffff',
        'second-bg': '#5840ba',
        text: '#242424',
        'text-2': '#5840ba',
        'text-3': '#a4db74',
        'text-4': '#ffffff',
        main: '#a4db74',
      },
    },
  },
  plugins: [],
};
