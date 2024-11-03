import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Makes the app available on all network interfaces
    port: 3000, // You can specify a different port if needed
  },
});
