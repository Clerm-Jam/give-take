/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    animation: {
      marquee: 'marquee 30s linear infinite',
      blink: 'blink 1s step-start 0s infinite',
    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(-150%)' },
      },
      blink: {
        '50%': { backgroundColor: 'black' },
      }
    },
    colors: {
      white: "#fefefeff",
      grey: "#c2c2c2ff",
      darkGrey: "#A0A0A0",
      blue: "#000084ff",
      green: "#007e85ff",
      yellow: "#fafa83ff",
      black: "#000000ff",
      debug: "#ff0000",
      ok: "#00ff00",
      error: "#ab2929",
      transparent: "transparent",
    },
  },
  plugins: [],
};
