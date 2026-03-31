// @ts-check
import { defineConfig, fontProviders, passthroughImageService } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import preact from '@astrojs/preact';

import mdx from '@astrojs/mdx';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  trailingSlash: 'never',
  integrations: [preact(), mdx()],
  adapter: cloudflare(),
  output: 'static',
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Comfortaa',
      cssVariable: '--font-comfortaa',
      styles: ["normal"]
    }
  ],
  image: {
    service: passthroughImageService(),
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'slack-ochin',
        dark: 'slack-dark'
      }
    }
  }


});