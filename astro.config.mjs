// @ts-check
import { defineConfig } from 'astro/config';
import sfmd from '@string-os/astro-sfmd/integration';

export default defineConfig({
  site: 'https://agentnews.md',
  build: {
    format: 'directory',
  },
  integrations: [
    sfmd({ contentDir: '.agentnews/site', sidebar: false }),
  ],
});
