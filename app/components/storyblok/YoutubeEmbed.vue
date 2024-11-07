<script setup lang="ts">
import type { YoutubeEmbedStoryblok } from "~/types/component-types-sb";

const props = defineProps<{ blok: YoutubeEmbedStoryblok }>();

// Video
const videoId = getYouTubeVideoId(props.blok.video_url) || "";
const videoOptions = computed(() => {
  return {
    controls: props.blok.controls ? 1 : 0,
    autoplay: props.blok.autoplay ? 1 : 0,
    loop: props.blok.loop ? 1 : 0,
  };
});

// Placeholder
const placeholderImgSrc = computed(() => props.blok.thumbnail?.filename || "");
const placeholderImgAlt = computed(() => props.blok.thumbnail?.alt || "");
</script>

<template>
  <div
    v-editable="blok"
    class="relative mx-auto !w-full !h-full [&>img]:!object-cover [&>div]:aspect-[16/9] !rounded-xl overflow-hidden video group"
  >
    <ScriptYouTubePlayer
      v-if="videoId"
      :video-id="videoId"
      :player-vars="videoOptions"
      class="!w-full !h-full"
    >
      <template v-if="blok.thumbnail?.filename" #placeholder>
        <NuxtImg
          :src="placeholderImgSrc"
          :alt="placeholderImgAlt"
          width="1920"
          height="1080"
          preset="storyblok"
          class="h-full w-full object-cover"
        />
      </template>
      <template #awaitingLoad>
        <div class="absolute inset-0 flex items-center justify-center">
          <UIcon
            name="i-heroicons-play-circle"
            class="w-24 h-24 text-white group-hover:scale-95 transition-all group-hover:opacity-70"
          />
        </div>
      </template>
    </ScriptYouTubePlayer>
    <USkeleton v-else class="w-full h-full" />
  </div>
</template>

<style>
.video img {
  object-fit: cover !important;
}
</style>
