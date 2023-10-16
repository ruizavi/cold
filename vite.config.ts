import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   build: {
      lib: {
         entry: 'src/index.ts',
         name: 'cold'
      }
   },
   test: {
      environment: 'happy-dom'
   }
});
