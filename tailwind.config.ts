import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    // Colors come from Radix: https://www.radix-ui.com/colors/docs/palette-composition/scales
    colors: {
      primary: {
        // Jade Dark
        1: "#0d1512",
        2: "#121c18",
        3: "#0f2e22",
        4: "#0b3b2c",
        5: "#114837",
        6: "#1b5745",
        7: "#246854",
        8: "#2a7e68",
        9: "#29a383",
        10: "#27b08b",
        11: "#1fd8a4",
        12: "#adf0d4",
      },
      // Sage Dark
      gray: {
        1: "#101211",
        2: "#171918",
        3: "#202221",
        4: "#272a29",
        5: "#2e3130",
        6: "#373b39",
        7: "#444947",
        8: "#5b625f",
        9: "#63706b",
        10: "#717d79",
        11: "#adb5b2",
        12: "#eceeed",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
