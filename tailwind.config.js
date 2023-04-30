/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'main': 'var(--main-bg-color)',
        'search': 'var(--search-bg-color)',
        'primary': 'var(--linkedin-blue)',
      },
      colors: {
        'links': 'var(--nav-links)',
        'premium': 'var(--premium)',
        'blue': 'var(--thick-blue)'
      },
      transitionTimingFunction: {
        'height': 'ease-in-out',

      },
    },
  },
  plugins: [],
}

