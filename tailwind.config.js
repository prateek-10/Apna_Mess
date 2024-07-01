/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // 'caftarea':"url('https://ik.imagekit.io/cmef8hxb6/3_WA1kRjsQi.jpg?updatedAt=1679424300495')",
        'logo': "url('/NIT_Rourkela_Colour_Logo.svg.png')",
        // 'circles':"url('https://4kwallpapers.com/images/wallpapers/google-circles-multicolor-colorful-white-background-5k-8k-2732x2732-5352.jpg')",
      }
    }
  },
  plugins: [],
};
