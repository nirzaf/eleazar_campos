import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  plugins: [imagetools()],
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
      'react-dom/server': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime'
    }
  },
  esbuild: {
    drop: ['console', 'debugger'],
    legalComments: 'none'
  },
  build: {
    target: 'es2019',
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'esbuild'
  }
})
