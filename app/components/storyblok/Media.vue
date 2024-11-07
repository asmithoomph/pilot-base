<script setup lang="ts">
import type { MediaStoryblok } from "~~/types/component-types-sb";

const props = defineProps<{ blok: MediaStoryblok }>();

const NuxtLink = resolveComponent("NuxtLink");

const { useObjectFit, useObjectPosition } = useStylingUtilities();

const mediaClasses = computed(() =>
  [
    useObjectFit(props.blok.fit_mode || "none"),
    useObjectPosition(props.blok.position || "center"),
  ].join(" ")
);

const imgSrc = computed(() => props.blok.file?.filename || null);
const imgAlt = computed(() => props.blok.file?.alt || "");
const loadingType = computed(() => (props.blok.lazy ? "lazy" : "eager"));
const imgPath = computed(() => useStoryblokLink(props.blok.path?.story));
</script>

<template>
  <component
    :is="blok.path?.story ? NuxtLink : 'div'"
    v-editable="blok"
    :to="imgPath"
    class="block relative w-full h-full z-50"
  >
    <NuxtImg
      v-if="imgSrc"
      :src="imgSrc"
      :alt="imgAlt"
      :class="[mediaClasses]"
      :loading="loadingType"
      class="w-full h-full"
      preset="storyblok"
    />
    <USkeleton v-else class="w-full h-full" />
  </component>
</template>
