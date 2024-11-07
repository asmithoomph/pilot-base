// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: process.env.NUXT_SITE_URL,
    name: process.env.NUXT_SITE_NAME || "Oomph Pilot",
    debug: process.env.NUXT_SITE_ENV === "preview",
  },

  devtools: { enabled: true },

  modules: [
    "@nuxt/image",
    "@nuxtjs/seo",
    "@nuxt/ui",
    "@nuxt/scripts",
    "@nuxt/fonts",
    "nuxt-security",
    "@nuxt/eslint",
    "@formkit/nuxt",
    "@storyblok/nuxt",
  ],

  storyblok: {
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    componentsDir: "./components",
  },

  components: [
    { path: "./components/storyblok/", global: true },
    "./components",
  ],

  formkit: {
    autoImport: true,
  },

  ui: {
    global: true,
    safelistColors: [
      "primary",
      "secondary",
      "red",
      "green",
      "blue",
      "yellow",
      "purple",
      "pink",
      "indigo",
      "rose",
      "cyan",
      "sky",
      "lime",
      "amber",
      "emerald",
      "teal",
      "fuchsia",
      "violet",
    ],
  },

  security: {
    enabled: process.env.NUXT_SITE_ENV === "production" ? true : false,
    headers: {
      contentSecurityPolicy: {
        "img-src": [
          "'self'",
          "data:",
          "https://*.storyblok.com",
          "https://i.ytimg.com",
        ],
      },
    },
  },

  image: {
    storyblok: {
      baseURL: "https://a.storyblok.com",
    },
    presets: {
      storyblok: {
        provider: "storyblok",
        modifiers: {
          format: "webp",
          quality: 80,
        },
      },
    },
  },

  runtimeConfig: {
    public: {
      SITE_ENV: process.env.NUXT_SITE_ENV,
      google: {
        tagManager: process.env.GOOGLE_TAG_MANAGER_ID,
      },
    },
  },

  seo: {
    redirectToCanonicalSiteUrl: true,
  },

  devServer: {
    https: {
      cert: "./localhost.pem",
      key: "./localhost-key.pem",
    },
  },

  future: {
    compatibilityVersion: 4,
  },
});
