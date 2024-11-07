<script setup lang="ts">
import type { GlobalReferenceStoryblok } from "~/types/component-types-sb";

defineProps<{ blok: GlobalReferenceStoryblok }>();
</script>

<template>
  <StoryblokComponent v-editable="blok" :blok="blok.reference.content" />
</template>
