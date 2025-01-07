import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 0, // Désactive l'inlining des assets
  },
  optimizeDeps: {
    exclude: ['video.js'] // Exclut video.js de l'optimisation si utilisé
  }
})
