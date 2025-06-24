/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Habilita dark mode via classe
  theme: {
    extend: {
      // Cores personalizadas para o tema
      colors: {
        // Background principal (dark)
        "dark-bg": "#0F0F23", // Cor base do seu Figma
        "dark-card": "#1A1A2E", // Cards com transparência
        "dark-accent": "#16213E", // Elementos de destaque

        // Glassmorphism colors
        "glass-white": "rgba(255, 255, 255, 0.1)",
        "glass-dark": "rgba(0, 0, 0, 0.2)",

        // Accent colors do seu design
        "primary-purple": "#6366F1", // Botões primários
        "primary-blue": "#3B82F6", // Links e elementos interativos
      },

      // Tipografia responsiva
      fontSize: {
        display: ["3.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        h1: ["2.5rem", { lineHeight: "1.2", fontWeight: "600" }],
        h2: ["2rem", { lineHeight: "1.3", fontWeight: "600" }],
        h3: ["1.5rem", { lineHeight: "1.4", fontWeight: "500" }],
      },

      // Animations para glassmorphism
      animation: {
        "glass-shine": "glass-shine 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
      },

      keyframes: {
        "glass-shine": {
          "0%, 100%": { "background-position": "-200% 0" },
          "50%": { "background-position": "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },

      // Backdrop blur para glassmorphism
      backdropBlur: {
        xs: "2px",
        glass: "12px",
        strong: "20px",
      },

      // Box shadows para profundidade
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        "glass-inset": "inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
        neo: "20px 20px 60px #0d0d1f, -20px -20px 60px #1a1a31",
      },
    },
  },
  plugins: [
    // Plugin para forms (útil para o formulário de contato)
    require("@tailwindcss/forms"),
  ],
};
