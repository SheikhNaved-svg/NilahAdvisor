import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist'
  },
  base: './', // Adjust the base path if needed
  server: {
    host: true, // Or '0.0.0.0'
    port: 5173, // Optional, to specify a custom port
  },
})
