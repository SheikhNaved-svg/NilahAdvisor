/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cgd: `
        linear-gradient(279.96deg, rgba(236, 242, 249, 0.9) -4.54%, rgba(239, 236, 250, 0.801) 95.29%),
        linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))
      `,
        "custom-gradient": "linear-gradient(90deg, #2347C7 0%, #39ABDC 100%)",
        "dual-gradient":
          "linear-gradient(90deg, #2347C7 0%, #39ABDC 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
        cgd2: "linear-gradient(109.49deg, #F2F8FE 3.07%, #F2F5FE 105.43%)",
      },

      fontFamily: {
        custom: ["MyCustomFont", "sans-serif"],
        customsecond: ["CustomFontsecond", "sans-serif"],
      },

      screens: {
        "3xl": "2000px",
        "4xl": "2300px",
      },
      boxShadow: {
        customshadow: "-12px 19px 32px 0px #1B3DB60D",
        customshadow2: "-8px 8px 32px 0px rgba(35, 71, 199, 0.1)",
      },
    },
  },
  plugins: [],
};
