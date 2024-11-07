<script setup lang="ts">
const route = useRoute();
const isPreview = useStoryblokPreview();

const relations = ["global-reference.reference"];

const story = await useAsyncStoryblok(
  route.path === "/" ? "home" : route.path,
  {
    version: isPreview ? "draft" : "published",
    resolve_links: "url",
    resolve_links_level: 2,
    resolve_relations: relations,
  }
);

if (!story.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    message: "Sorry, we couldn't find the page you're looking for.",
  });
}

defineOptions({
  inheritAttrs: false,
});

useSeoMeta({
  title: story.value?.content?.meta_title,
  description: story.value?.content?.meta_description,
});
</script>

<template>
  <StoryblokComponent
    v-if="story?.content"
    :blok="story?.content"
    :published_at="story.first_published_at"
  />
</template>
