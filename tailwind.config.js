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
        "highlight" : "#ffbf00"
      },
      fontWeight: {
        "medium" : "600"
      }
    },
  },
  plugins: [],
}

