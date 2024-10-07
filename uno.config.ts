import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'switch-animation': 'transition duration-300',
      'bg-header': 'bg-[#ffffff] dark:bg-[#2a2a2b] switch-animation',
      'text-header': 'text-[#222831] dark:text-[#a0a0a0] switch-animation',
      'text-content': 'text-[#7a8b9a] switch-animation',
      'bg-base': 'bg-[#ffffff] dark:bg-[#1e1e1e] switch-animation',
      'bg-base-hover': 'bg-[#e0e0e0] dark:bg-[#30303a] switch-animation',
      'card-base': 'bg-[#ffffff] dark:bg-[#10101a] switch-animation',
      'text-base': 'text-[#20202a] dark:text-[#f0f0f0] switch-animation',
      'text-base-hover': 'text-[#60606a] dark:text-[#d0d0d0] switch-animation',
    },
  ],
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        height: '1.2em',
        width: '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
    presetTypography(),
    presetWebFonts({ fonts: {} }),
  ],
  transformers: [
    transformerDirectives({
      applyVariable: ['--at-apply', '--uno-apply', '--uno'],
    }),
    transformerVariantGroup(),
  ],
})
