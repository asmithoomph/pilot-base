<script setup lang="ts">
import type { SectionStoryblok } from "~/types/component-types-sb";

const props = defineProps<{ blok: SectionStoryblok }>();

const { useSectionPadding } = useStylingUtilities();

const padding = computed(() =>
  useSectionPadding(
    props.blok.padding_top || false,
    props.blok.padding_bottom || false
  )
);

const removeMargins = computed(() => props.blok.remove_margins || false);
</script>

<template>
  <section
    v-editable="blok"
    :class="['space-y-16 bg-primary', padding, removeMargins ? '!my-0' : '']"
  >
    <StoryblokComponent
      v-for="content in props.blok.content"
      :key="content._uid"
      :blok="content"
    />
  </section>
</template>
