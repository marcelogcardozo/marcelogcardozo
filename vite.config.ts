import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Keep a stable dev port to avoid dynamic import URLs pointing to a previous port
  server: {
    port: 5179,
    strictPort: true,
  },
  build: {
    minify: "terser",
    sourcemap: false,
    chunkSizeWarningLimit: 1500, // raise limit; we also split heavy libs below
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          motion: ["framer-motion"],
          icons: ["lucide-react"],
        },
      },
    },
  },
});
