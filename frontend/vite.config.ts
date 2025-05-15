import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,  // This is for file matching; TODO: look into
    },
    hmr: {
      overlay: false, // disables error overlay; TODO: look into why
    },
  },      
})
