<script setup lang="ts">
import type { BackgroundStoryblok } from "~~/types/component-types-sb";
defineProps<{ blok: BackgroundStoryblok }>();
</script>

<template>
  <div
    v-editable="blok"
    class="absolute inset-0 w-full h-full"
    :style="{
      backgroundImage: `url(${blok.image?.filename})`,
      backgroundSize: blok.cover ? 'cover' : 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: blok.repeatable ? 'repeat' : 'no-repeat',
    }"
  />
</template>
