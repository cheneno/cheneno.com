// @ts-check
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

import { SITE } from './site.config'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  integrations: [
    UnoCSS({
      injectReset: true, // or a path to the reset file
    }),
    mdx(),
  ],
})
