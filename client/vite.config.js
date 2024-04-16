import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Dsaz/',
  plugins: [react()],
  server: {
    port: 3001,
  },
});
