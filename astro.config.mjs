import { defineConfig } from 'astro/config';

// GitHub Pages de projeto: https://afroozcrypto.github.io/sites-demo/
export default defineConfig({
  site: 'https://afroozcrypto.github.io',
  base: '/sites-demo',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always' },
});
