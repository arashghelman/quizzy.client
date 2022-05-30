module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          base: "#374151",
          "light-1": "#4b5563",
          "light-2": "#6b7280",
        },
        red: {
          base: "#f87171",
        },
        emerald: {
          base: "#10b981",
          "light-1": "#34d399",
          "light-2": "#a7f3d0",
        },
        amber: {
          base: "#fde68a",
        },
        blue: {
          base: "#bfdbfe",
          "light-1": "#dbeafe",
          "light-2": "#eff6ff",
        },
        sky: {
          base: "#0ea5e9",
          "light-1": "#e0f2fe",
        },
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
      fontFamily: {
        nunito: ["'Nunito Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
