<script setup lang="ts">
import type { ButtonRowStoryblok } from "~~/types/component-types-sb";

const props = defineProps<{ blok: ButtonRowStoryblok; loading: boolean }>();

const { useFlexAJustify } = useStylingUtilities();

const justify = computed(() =>
  useFlexAJustify(props.blok?.justify || "center")
);
</script>

<template>
  <div :class="['flex gap-2.5 w-full', justify]">
    <StoryblokComponent
      v-for="button in blok.buttons"
      :key="button._uid"
      :blok="button"
      :loading="loading || false"
    />
  </div>
</template>
