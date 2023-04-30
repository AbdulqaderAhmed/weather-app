/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        sunny: "url('./src/assests/img/sunny.jpg')",
        rainy: "url('./src/assests/img/cloud2.jpg')",
        partial: "url('./src/assests/img/partial.jpg')",
        cloudy: "url('./src/assests/img/rain2.jpg')",
      },
    },
  },
  plugins: [],
};
