<script setup lang="ts">
import type { DefaultPageStoryblok } from "~/types/component-types-sb";
defineProps<{ blok: DefaultPageStoryblok }>();
</script>

<template>
  <div v-editable="blok" class="space-y-20">
    <StoryblokComponent
      v-for="item in blok.body"
      :key="item._uid"
      :blok="item"
    />
  </div>
</template>
