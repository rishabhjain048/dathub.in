module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in-out": "fadeInOut 6s infinite", // Fades in and out over 6 seconds
      },
      keyframes: {
        fadeInOut: {
          "0%, 100%": { opacity: 0 }, // Fully transparent at start and end
          "33%": { opacity: 1 }, // Fully visible at 1/3 of the duration
        },
      },
    },
  },
  plugins: [],
};
