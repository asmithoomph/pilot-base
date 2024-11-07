import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  cache: {
    clear: "auto",
    type: "none",
  },
});

export default defineNitroPlugin(async (nitroApp) => {
  try {
    const config = await Storyblok.get("cdn/stories/config", {
      version: "draft",
    });
    nitroApp.hooks.hook("site-config:init", ({ siteConfig }) => {
      siteConfig.push({
        name: config.data.story.content.site_name,
      });
    });
  } catch {
    nitroApp.hooks.hook("site-config:init", ({ siteConfig }) => {
      siteConfig.push({
        name: process.env.NUXT_SITE_NAME,
      });
    });
  }
});
