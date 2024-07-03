/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('/NIT_Rourkela_Colour_Logo.svg.png')",
      },
      backdropBlur: {
        7: "7px",
      },
      animation: {
        "text-logo-animate1": "textLogoAnimate1 12s ease-in-out infinite",
        "text-logo-animate2": "textLogoAnimate2 12s ease-in-out infinite",
        "text-logo-animate3": "textLogoAnimate3 12s ease-in-out infinite",
      },
      keyframes: {
        textLogoAnimate1: {
          "0%, 22%, 96%, 100%": { opacity: "1", transform: "translateY(0)" },
          "26%": { opacity: "0", transform: "translateY(30px)" },
          "32%, 59%, 63%, 67%, 92%": {
            opacity: "0",
            transform: "translateY(-30px)",
          },
        },
        textLogoAnimate2: {
          "0%, 22%, 67%, 92%, 96%, 100%": {
            opacity: "0",
            transform: "translateY(-30px)",
          },
          "63%": { opacity: "0", transform: "translateY(30px)" },
          "26%, 32%, 59%": { opacity: "1", transform: "translateY(0px)" },
        },
        textLogoAnimate3: {
          "0%, 22%, 26%, 32%, 59%, 100%": {
            opacity: "0",
            transform: "translateY(-30px)",
          },
          "63%, 67%, 92%": { opacity: "1", transform: "translateY(0)" },
          "96%": { opacity: "0", transform: "translateY(30px)" },
        },
      },
    },
  },
  plugins: [],
};
