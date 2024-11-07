/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "app/components/**/*.{vue,js,ts}",
    "app/storyblok/**/*.{vue,js,ts}",
    "app/layouts/**/*.vue",
    "app/pages/**/*.vue",
    "app/composables/**/*.{js,ts}",
    "app/plugins/**/*.{js,ts}",
    "app/app.{js,ts,vue}",
    "app/error.{js,ts,vue}",
    "formkit.theme.ts",
    "formkit.config.ts",
    "app.config.ts",
    "nuxt.config.ts",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
        portrait: "4 / 5",
        vertical: "9 / 16",
      },
      borderRadius: {
        default: "0.5rem",
      },
    },
  },
};
