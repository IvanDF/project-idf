// https://nuxt.com/docs/api/configuration/nuxt-config

// https://nuxt.com/docs/getting-started/prerendering#crawl-based-pre-rendering
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint"],
  pages: true,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/index.scss" as *;',
        },
      },
    },
  },
  app: {
    // https://nuxt.com/docs/getting-started/transitions#dynamic-transitions
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
});
