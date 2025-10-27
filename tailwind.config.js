/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        8: "0.5rem", // text-8
        9: "0.5625rem", // text-9
        10: "0.625rem", // text-10
        11: "0.6875rem", // text-11
        13: "0.8125rem" // text-13
      },
      borderRadius: {
        5: "5px",
        10: "0.625rem"
      },
      animation: {
        zoomLoop: "zoomLoop 1.5s infinite"
      }
    }
  },
  plugins: []
}
