import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** Nasazení na www.stavbyciperka.cz/rekonstrukce-bytu (WordPress zůstává v kořeni). */
export default defineConfig({
  base: "/rekonstrukce-bytu/",
  plugins: [react()],
});
