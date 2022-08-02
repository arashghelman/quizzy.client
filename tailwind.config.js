module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        inputFocus: `0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color),
          inset 0 0 0 1px #3b82f6`,
        innerFocus: "inset 0 0 0 1px #3b82f6",
      },
    },
  },
  plugins: [],
};
