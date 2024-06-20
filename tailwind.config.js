/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    animation: {
      marquee: 'marquee 30s linear infinite',
      blink: 'blink 1s step-start 0s infinite',
      blinkTransparent: 'blinkTransparent 1s step-start 0s infinite',
    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(-150%)' },
      },
      blink: {
        '50%': { backgroundColor: 'black' },
      },
      blinkTransparent: {
        '50%': { color: 'transparent' },
      }
    },
    colors: {
      white: "#fefefe",
      grey: "#c2c2c2",
      darkGrey: "#A0A0A0",
      blue: "#000084",
      green: "#007e85",
      yellow: "#fafa83",
      black: "#000000",
      debug: "#ff0000",
      ok: "#00ff00",
      error: "#ab2929",
      transparent: "transparent",
    },
  },
  plugins: [],
};
