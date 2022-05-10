module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    extend: {
      boxShadow: {
        all: "0px 4px 24px 0 rgba(34, 41, 47, 0.1)",
      },
    },
  },
  plugins: [],
};
