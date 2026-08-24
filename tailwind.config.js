/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B3C91",
          dark: "#071F4D",
          light: "#154A9E",
        },
        gold: {
          DEFAULT: "#F4C542",
          soft: "#FBE7A6",
          deep: "#C99A1F",
        },
        cream: "#FFFDF7",
        surface: "#F8F9FA",
        ink: "#1E293B",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(11,60,145,0.18)",
        card: "0 8px 24px -8px rgba(11,60,145,0.15)",
        gold: "0 8px 24px -8px rgba(201,154,31,0.35)",
      },
      backgroundImage: {
        radiant: "radial-gradient(circle at 50% 0%, rgba(244,197,66,0.18), transparent 60%)",
        "navy-gradient": "linear-gradient(180deg, rgba(7,31,77,0.55) 0%, rgba(7,31,77,0.92) 100%)",
      },
     animation: {
  sunray: "sunray 8s ease-in-out infinite",
  float: "float 6s ease-in-out infinite",
  marquee: "marquee 25s linear infinite",
  "marquee-reverse": "marqueeReverse 18s linear infinite",
},
    keyframes: {
  sunray: {
    "0%, 100%": { opacity: 0.5, transform: "scale(1)" },
    "50%": { opacity: 0.9, transform: "scale(1.08)" },
  },

  float: {
    "0%, 100%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(-10px)" },
  },

  marquee: {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(-50%)" },
  },

  marqueeReverse: {
    "0%": { transform: "translateX(-50%)" },
    "100%": { transform: "translateX(0)" },
  },
},
    },
  },
  plugins: [],
}
