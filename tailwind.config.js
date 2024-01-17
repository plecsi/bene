/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class", '[data-mode="dark"]'],
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    theme: {
      screens: {},
      colors: {
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        blue: {
          base: "#142534",
          100: "#277DBD",
          200: "#3893B1",
          300: "#023876",
          900: "#91B7CC"
        },
        purple: "#D340C5",
        green: "#02FF40",
        dark: "#222222",
        red: "#fd2330",
        gray: {
          100: "#efefef",
          200: "#979797"
        },
        primary: "var(--color-primary)",
        btnHover: "var(--btn-hover)"
      },
      fontFamily: {}
    },
    plugins: [],
}