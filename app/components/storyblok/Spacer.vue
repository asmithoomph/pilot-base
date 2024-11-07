<script setup lang="ts">
import type { SpacerStoryblok } from "~~/types/component-types-sb";
defineProps<{ blok: SpacerStoryblok }>();
</script>

<template>
  <div v-editable="blok" class="lg:h-28 sm:h-20 h-10" />
</template>
