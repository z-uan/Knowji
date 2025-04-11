// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxtjs/tailwindcss'],
  srcDir: 'src/',
  dir: {
    public: 'public/',
  },
  css: ['@/assets/styles/main.css'],
  components: {
    dirs: [
      {
        path: '~/components/base',
        pathPrefix: true,
        prefix: 'Base',
        global: true,
      },
      {
        path: '~/components/features',
        pathPrefix: true,
        global: true,
      },
    ],
  },
  tailwindcss: {
    cssPath: '@/assets/styles/tailwind.css',
    configPath: 'tailwind.config.ts',
  },
  app: {
    head: {
      htmlAttrs: {
        style: 'scroll-behavior: smooth;',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
    },
  },
});
