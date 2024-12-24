import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Jerry_Velazquez_Portfolio/',
  plugins: [react()],
  server: {
    port: 3000
  }
})
