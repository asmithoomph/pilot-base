<script setup lang="ts">
import type { GridStoryblok } from "~/types/component-types-sb";

const props = defineProps<{ blok: GridStoryblok }>();

const { useColumns, useGutter } = useStylingUtilities();

const columns = computed(() => useColumns(props.blok.columns || "3"));
const gutter = computed(() => useGutter(props.blok.gap || "md"));
</script>

<template>
  <div class="w-full @container">
    <div :class="['grid', columns, gutter]">
      <StoryblokComponent
        v-for="content in props.blok.content"
        :key="content._uid"
        :blok="content"
      />
    </div>
  </div>
</template>
