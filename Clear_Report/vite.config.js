import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host:true,
    port: 3000, 
    proxy: {
      '/test': 'http://localhost:5000',
      '/SendEmailToUser': 'http://localhost:5000'
    }
  },
})
