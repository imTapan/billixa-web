import env from "./env";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  ssr: false,

  devtools: { enabled: false },

  modules: ["@nuxt/ui", "@pinia/nuxt", "@nuxt/fonts"],

  runtimeConfig: {
    public: {
      ...env,
    },
  },

  fonts: {
    google: {
      families: {
        Barlow: true,
      },
    },
    devtools: false,
  },

  colorMode: {
    preference: "light",
  },
});
