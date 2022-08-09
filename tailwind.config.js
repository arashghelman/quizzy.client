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
        focus: `0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color),
          inset 0 0 0 calc(1px + var(--tw-ring-offset-width)) #3b82f6`,
        "inner-focus":
          "inset 0 0 0 calc(1px + var(--tw-ring-offset-width)) #3b82f6",
      },
    },
  },
  plugins: [],
};
