/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#FEB60C",
        "secondary" : "#1D2939",
        "highlight" : "#ffbf00",
        "section" : "#F2EEEC"
      },
      fontWeight: {
        "medium" : "600"
      },
      backgroundImage: {
        'about-us': "url('/banner-3.jpg')",
      }
    },
  },
  plugins: [],
}

