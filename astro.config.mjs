import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://unknownidentity2629-cyber.github.io',
  base: '/islamic-news-agency',
  output: 'static',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto'
  },
  compressHTML: true
});
