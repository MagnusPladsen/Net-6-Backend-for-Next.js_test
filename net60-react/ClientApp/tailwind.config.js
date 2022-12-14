/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3F9EC8",
        "primary-medium": "#C5E2EF",
        "primary-light": "#E9F3F7",
        "secondary": "#DC1C83",
        "secondary-medium": "#F9D2E7",
        "secondary-light": "#FBE8F3",
        "border": "#DBDBDB",
        "dark-grey": "#1E1E1E",
        "light-grey": "#333333",
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      dropShadow: {
        'default': '0 2px 10px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide'),
  ],
}