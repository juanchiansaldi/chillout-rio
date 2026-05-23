import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// IMPORTANT: If your GitHub Pages site is at https://USERNAME.github.io/REPO-NAME/
// set base to '/REPO-NAME/'. If it's at a custom domain or USERNAME.github.io root,
// set base to '/'.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/chillout-rio/',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096, // inline small assets, keep big images as files
  },
});
