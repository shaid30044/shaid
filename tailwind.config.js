/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "serif"],
        sourceCode: ["Source Code Pro", "monospace"],
      },
      transitionDuration: {
        4000: "4000ms",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
  },
  plugins: [require("daisyui")],
};
