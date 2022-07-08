import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  meta: {
    script: [{ src: "https://kit.fontawesome.com/a2743438da.js" }],
  },
  head: {
    link: [
      { rel: "icon", type: "image/png", href: "/assets/icons/favicon.ico" },
    ],
  },
  content: {
    highlight: {
      theme: "material-palenight",
      preload: ["bash", "typescript", "javascript"],
    },
  },
});
