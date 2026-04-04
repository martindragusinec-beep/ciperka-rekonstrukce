/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      colors: {
        figma: {
          red: "#ff2500",
          ink: "#1b1b1b",
          body: "#4a5565",
          muted: "#6a7282",
          slate: "#364153",
          border: "#e5e7eb",
          /** Světlé pozadí sekcí (ekvivalent Tailwind gray-50) */
          "section-bg": "#F9FAFB",
          green: "#0A8F39",
          "green-fg": "#064422",
          "green-bg": "#ecf6ef",
          "green-ring": "#9fd4b0",
          blue: "#1c398e",
          "blue-bg": "#eff6ff",
          "blue-ring": "#bedbff",
          "blue-dot": "#2b7fff",
        },
      },
      boxShadow: {
        card: "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)",
        hero: "0px 25px 50px -12px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};
