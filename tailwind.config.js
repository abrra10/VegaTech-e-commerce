/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Keyframes for animation
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      // Custom animations
      animation: {
        "infinite-scroll": "infinite-scroll 20s linear infinite",
      },
      // Custom fonts
      fontFamily: {
        Primary: ["Dela Gothic One", "sans-serif"], // Primary font
        Secondary: ["Righteous", "sans-serif"], // Secondary font
        tertiary: ["Crimson Text", "serif"], // Tertiary font
      },
      // Custom colors
      colors: {
        stone: require("tailwindcss/colors").stone,
        zinc: require("tailwindcss/colors").zinc,
        slate: require("tailwindcss/colors").slate,
      },
    },
  },
  plugins: [],
});
