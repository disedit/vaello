import mkcert from "vite-plugin-mkcert";
import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  runtimeConfig: {
    public: {
      baseUrl: 'https://vaello.com',
      environment: 'preview'
    }
  },

  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    ['@storyblok/nuxt', {
      accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
      apiOptions: {
        region: 'eu',
      },
    }],
  ],

  devServer: {
    https: true,
  },

  vite: {
    plugins: [
      tailwindcss(),
      mkcert()
    ],
  },

  image: process.env.NUXT_PUBLIC_NODE_ENV === 'production' ? {
    provider: 'netlify',
    domains: ['a.storyblok.com']
  } : {
    provider: 'storyblok',
    storyblok: {
      baseURL: 'https://a.storyblok.com'
    }
  },

  i18n: {
    defaultLocale: 'es',
    locales: [
      { code: 'es', name: 'Español' },
      { code: 'en', name: 'English' }
    ]
  }
})