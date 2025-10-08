import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/web/",
  preview: {
    host: true,
    port: 4173,
    allowedHosts: (process.env.VITE_ALLOWED_HOSTS || "localhost").split(","),
  },
});
