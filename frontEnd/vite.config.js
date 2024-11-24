import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: { '.js': 'jsx', '.jsx': 'jsx' },  // Explicitly handle both .js and .jsx files
    include: [
      // Handles files in the root directory
      /.*\.(js|jsx)$/,
      // Handles files in src and its subdirectories
      /src\/.*\.(js|jsx)$/
    ],
    exclude: []
  }
})