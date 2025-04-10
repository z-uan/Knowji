import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/icon", "@nuxt/image"],
  typescript: {
    typeCheck: true,
    strict: true,
  },
  build: {
    transpile: ["vue"],
  },
  runtimeConfig: {
    public: {
      // Add your public runtime config here
    }
  },
  vite: {
    build: {
      lib: {
        entry: "./src/index.ts",
        name: "Knowji",
        fileName: "index",
      },
      rollupOptions: {
        external: ["vue", "nuxt"],
        output: {
          globals: {
            vue: "Vue",
            nuxt: "Nuxt",
          },
        },
      },
    },
  },
  srcDir: "src/",
  dir: {
    public: "../public",
  },
  app: {
    head: {
      title: "Knowji",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "A Nuxt 3 library for Knowji" }
      ]
    }
  }
});
