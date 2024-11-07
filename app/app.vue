<script setup lang="ts">
import type { SiteConfigStoryblok } from "~/types/component-types-sb";

const config = useState<SiteConfigStoryblok>("sb-config");
const isPreview = useStoryblokPreview();

await callOnce(async () => {
  const story = await useAsyncStoryblok("config", {
    version: isPreview ? "draft" : "published",
    resolve_links: "url",
    resolve_links_level: 2,
  });
  config.value = story.value?.content as SiteConfigStoryblok;
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UNotifications />
    <USlideovers />
    <CookieBanner />
  </div>
</template>
