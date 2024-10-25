import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{twig,ts,html}"],
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],

  theme: {
    extend: {
      backgroundImage: {
        "footer-bg": "url('/images/footer_bg.jpg')",
      },
      colors: {
        blue: {
          50: "#f2f9fe",
          500: "#00a0e9",
          900: "#003046",
        },
        gray: {
          50: "#f8fcfe",
          100: "#f9fafb",
          200: "#f4f5f5",
          300: "#ced2da",
          400: "#97a1af",
          500: "#637083",
        },
        red: {
          700: "#c20a0a",
        },
        yellow: {
          50: "#fff8e8",
          100: "#ffe9b5",
          300: "#ffcb4e",
          400: "#febb1b",
          900: "#543b00",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "24px",
        },
        screens: {
          xl: "1393px",
        },
      },
      fontFamily: {
        sans: ["MuseoSansRounded", ...fontFamily.sans],
      },
      gridTemplateAreas: {
        "bonus-content": ["logo badges", "logo title", "logo text"],
        "bonus-content-mobile": ["badges badges", "logo title", "text text"],
        "footer-content": ["logo", "text", "socials"],
        "footer-content-mobile": ["logo socials", "text text"],
        "footer-menu": ["col-1 col-2 col-3"],
        "footer-menu-mobile": ["col-1 col-2", "col-1 col-3"],
      },
    },
    screens: {
      xl: { max: "1210px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    variants: {
      gridTemplateAreas: ["responsive"],
    },
  },
};
