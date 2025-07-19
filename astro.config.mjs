// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import relativeLinks from 'astro-relative-links';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  devToolbar: { enabled: false },
  
  trailingSlash: 'never',
  integrations: [relativeLinks(), icon(
    {
      iconDir: 'src/icons',
    }
  )],
});