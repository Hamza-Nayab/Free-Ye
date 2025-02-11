import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    allowedHosts: ["85ad57ad-9d69-4df1-ae22-550072b51e04-00-1b2bcfoe11v27.picard.replit.dev"],
    hmr: {
      clientPort: 443,
      host: '0.0.0.0',
      protocol: 'wss'
    }
  }
})