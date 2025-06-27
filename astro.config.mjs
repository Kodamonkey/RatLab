// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // URL pública de tu sitio (sin slash al final). Actualiza esta URL con el
  // dominio de tu deployment en Netlify o el que prefieras.
  site: 'https://your-site.netlify.app',
  // Ruta base para todas las páginas. Para Netlify debe ser la raíz `/` para
  // que los estilos e imágenes se resuelvan correctamente.
  base: '/',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap({
      // (opcional) puedes pasarle aquí opciones como changefreq, priority, etc.
    }),
  ],
});
