module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: "#374151",
        lighter: "#4b5563",
      },
      width: {
        base: "1.3rem",
        sm: "1.1rem",
      },
      borderWidth: {
        1: "1px",
      },
      fontFamily: {
        nunito: ["'Nunito Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
