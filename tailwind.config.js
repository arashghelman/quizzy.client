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
      spacing: {
        "extra-tight": "0.25rem",
        tight: "0.5rem",
        base: "1rem",
        loose: "1.25rem",
        "extra-loose": "1.625rem",
      },
      borderWidth: {
        1: "1px",
      },
      fontSize: {
        "page-heading": ["1.5rem", "1.8rem"],
      },
      fontFamily: {
        nunito: ["'Nunito Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
