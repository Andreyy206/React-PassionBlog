import fluid from 'fluid-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        regular: ["raleway-regular", "sans-serif"],
        semibold: ["raleway-semibold", "sans-serif"],
        bold: ["raleway-bold", "sans-serif"],
        header: ['playfairdisplay-bold', "serif"]
      },

      textColor: {
        accent: "rgba(var(--accent), <alpha-value>)",
        light: "rgba(var(--light), <alpha-value>)",
        dark: "rgba(var(--dark), <alpha-value>)",
      },
      backgroundColor: {
        accent: "rgba(var(--accent), <alpha-value>)",
        light: "rgba(var(--light), <alpha-value>)",
        dark: "rgba(var(--dark), <alpha-value>)",
      },
      borderColor: {
        accent: "rgba(var(--accent), <alpha-value>)",
        light: "rgba(var(--light), <alpha-value>)",
        dark: "rgba(var(--dark), <alpha-value>)",
      },
      fontSize: {
        ch1: "clamp(1.383rem, 0.7858rem + 2.986vw, 3.0253rem)",
        ch2: "clamp(1.2962rem, 0.7365rem + 2.7985vw, 2.8353rem)",
        ch3: "clamp(1.2148rem, 0.6902rem + 2.6228vw, 2.6573rem)",
        ch4: "clamp(1.1385rem, 0.6469rem + 2.4581vw, 2.4904rem)",
        ch5: "clamp(1.067rem, 0.6063rem + 2.3038vw, 2.3341rem)",
        ch6: "clamp(1rem, 0.5682rem + 2.1591vw, 2.1875rem)",
        csmall: "clamp(0.9372rem, 0.5325rem + 2.0235vw, 2.0501rem)",
      },
    },
  },
  plugins: [
  ],
};

