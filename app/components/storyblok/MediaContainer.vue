<script setup lang="ts">
import type { MediaStoryblok } from "~~/types/component-types-sb";

const props = defineProps<{ blok: MediaStoryblok }>();

const { useWidth, useAspectRatio, useRing, useShadow, useBorderRadius } =
  useStylingUtilities();

const wrapperClasses = computed(() =>
  [
    useWidth(props.blok.size || "md"),
    useAspectRatio(props.blok.aspect_ratio || "auto"),
    useRing(props.blok.ring || false),
    useShadow(props.blok.shadow || false),
    useBorderRadius(props.blok.border_radius || "default"),
  ].join(" ")
);
</script>

<template>
  <div v-editable="blok" :class="['overflow-hidden mx-auto', wrapperClasses]">
    <StoryblokComponent
      v-for="media in blok.media"
      :key="media._uid"
      :blok="media"
    />
  </div>
</template>
