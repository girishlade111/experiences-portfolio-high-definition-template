import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Static portfolio — no adapter, SSG output.
export default defineConfig({
  output: 'static',
  integrations: [tailwind()],
});
