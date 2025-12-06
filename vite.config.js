// vite.config.js (UPDATED)

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // =========== NAYA CODE YAHAN ADD HUA HAI ===========
  server: {
    proxy: {
      // '/api' se shuru hone wali sabhi requests ko target par forward karo
      '/api': {
        target: 'http://localhost:5000', // Aapka server.js ka port
        changeOrigin: true, 
        secure: false, 
      },
    },
  },
  // ====================================================
});