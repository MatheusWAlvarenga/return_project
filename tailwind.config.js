module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: "#8257E6",
        "brand-hover": "#996DFF",
        "brand-text": "#FFFFFF",

        background: "#E5E5E5",
        "background-dark": "#09090A",

        surface: {
          primary: "#FFFFFF",
          "primary-dark": "#18181B",

          secondary: "#F4F4F5",
          "secondary-dark": "#27272A",

          hover: "#E4E4E7",
          "hover-dark": "#3F3F46",
        },
        stroke: "#D4D4d8",
        "stroke-dark": "#52525B",

        tooltip: "#27272A",
        "tooltip-dark": "#F4F4F5",

        // text-colors
        primary: "#27272A",
        "primary-dark": "#F4F4F5",
        secondary: "#71717A",
        "secondary-dark": "#A1A1AA",
        tooltip: "#F4F4F5",
        "tooltip-dark": "#27272A",
      },
      borderRadius: {
        s2: "0.25rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
