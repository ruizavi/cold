import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import * as packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   build: {
      lib: {
         entry: resolve('src', 'index.tsx'),
         name: 'cold-plasma',
         formats: ['es', 'umd']
      },
      rollupOptions: {
         external: [...Object.keys(packageJson.peerDependencies)]
      }
   },
   test: {
      environment: 'happy-dom'
   }
});
