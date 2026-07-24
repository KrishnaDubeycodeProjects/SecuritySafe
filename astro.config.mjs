// @ts-check
import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'; // <--- Make sure this line is here


export default defineConfig({
  site: 'https://KrishnaDubeycodeProjects/SecuritySafe',
  base: '',
  server: {
    
    proxy: {
      // Forward any request starting with /api to your backend
      '/api': 'http://localhost:8000',
    },
  },
   integrations: [svelte()], 
})