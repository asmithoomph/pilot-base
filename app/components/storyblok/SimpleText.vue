<script setup lang="ts">
import type { SimpleTextStoryblok } from "~/types/component-types-sb";

const props = defineProps<{ blok: SimpleTextStoryblok }>();

const { useTextSize, useTextAlign } = useStylingUtilities();

const bodyText = renderRichText(props.blok.body);
const bodySize = computed(() => useTextSize(props.blok.size));
const align = computed(() => useTextAlign(props.blok.align || "left"));
</script>

<template>
  <div v-editable="blok" :class="[align]">
    <h2
      v-if="blok.eyebrow"
      class="text-primary-600 dark:text-primary-300 sm:text-base text-sm font-semibold mb-1.5 uppercase"
    >
      {{ blok.eyebrow }}
    </h2>
    <h3 class="font-bold font-heading text-3xl lg:text-5xl mb-4">
      {{ blok.headline }}
    </h3>
    <!-- eslint-disable vue/no-v-html -->
    <div
      :class="['prose dark:prose-invert', bodySize, align]"
      v-html="bodyText"
    />
    <div v-if="blok.buttons?.length" class="mt-6">
      <StoryblokComponent
        v-for="button in blok.buttons"
        :key="button._uid"
        :blok="button"
      />
    </div>
  </div>
</template>
