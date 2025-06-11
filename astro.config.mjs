// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // URL pública de tu sitio (sin slash al final)
  site: 'https://tu-usuario.github.io/RatLab',
  // ruta base para todas las páginas
  base: '/RatLab/',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap({
      // (opcional) puedes pasarle aquí opciones como changefreq, priority, etc.
    }),
  ],
});
