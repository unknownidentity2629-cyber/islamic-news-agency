import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://news-bureau-7x.github.io/islamic-news-agency',
  output: 'static',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto'
  },
  compressHTML: true
});
