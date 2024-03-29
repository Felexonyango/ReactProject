/// <reference types="vite/client" />
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv'
dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: "https://backend-project-ww9p.vercel.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
          },
        },
        plugins: [react()],
      },
});