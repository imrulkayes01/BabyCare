/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        fredoka: ["Fredoka", "sans-serif"],
      },
      colors: {
        primary: "#FF4D8D",
        secondary: "#4D65F9",
      },
    },
  },

  plugins: [],
};
