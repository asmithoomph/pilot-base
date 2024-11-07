<script setup lang="ts">
import type { ContainerStoryblok } from "~~/types/component-types-sb";

const props = defineProps<{
  blok: ContainerStoryblok;
  isNested?: boolean;
}>();

const { useWidth } = useStylingUtilities();

const width = computed(() => useWidth(props.blok.width || "2xl"));
</script>

<template>
  <div
    v-editable="blok"
    :class="['container w-full', width, isNested ? 'px-0' : '']"
  >
    <StoryblokComponent
      v-for="innerBlok in blok.content"
      :key="innerBlok._uid"
      :blok="innerBlok"
      :is-nested="innerBlok.component === 'container'"
    />
  </div>
</template>
