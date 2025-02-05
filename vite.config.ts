import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'widget.js',
        globals: {
          "react/jsx-runtime": "jsxRuntime",
          "react-dom/client": "ReactDOM",
          react: "React",
        },
        sourcemap: false,
        dir: 'dist',
        format: 'iife', // Set the output format to IIFE
      },
      input: "./src/widget/index.tsx"
    },
  }
})
