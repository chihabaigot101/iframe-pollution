import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
      Headers: {
        'Access-Control-Allow-Origin': '*',
        'X-Frame-Options': '*'
    },
})
