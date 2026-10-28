// @ts-check
import { defineConfig } from 'astro/config';
import sfmd from '@string-os/astro-sfmd/integration';

export default defineConfig({
  site: 'https://agentnews.md',
  // Preserve Astro 6 whitespace behavior across the Astro 7 compiler migration.
  compressHTML: true,
  build: {
    format: 'directory',
  },
  integrations: [
    // Pages render through parseSfmdFile/marked, not Astro's Markdown pipeline.
    sfmd({ contentDir: '.agentnews/site', sidebar: false, stripMdLinksInHtml: false }),
  ],
});
