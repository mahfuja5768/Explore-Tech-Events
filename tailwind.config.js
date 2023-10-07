/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
      keyframes: {
        moveRight: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(10px)', // Adjust the value to control the distance of the animation
          },
        },
      },
      animation: {
        moveRight: 'moveRight 3s infinite', // Use the keyframes animation here
      },
    },
  },
  plugins: [require("daisyui")],
};
