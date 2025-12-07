import { defineConfig } from 'vite'

export default defineConfig({
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
