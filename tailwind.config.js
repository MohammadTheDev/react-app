/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#030905",
        background: "#fafefb",
        primary: "#3fd577",
        secondary: "#89edaf",
        accent: "#4cef8a",
      },
      font: {
        fontSize: {
          sm: "0.750rem",
          base: "1rem",
          xl: "1.333rem",
        },
        fontFamily: {
          heading: "Poppins",
          body: "Poppins",
        },
        fontWeight: {
          normal: "400",
          bold: "700",
        },
      },
      boxShadow: {
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
