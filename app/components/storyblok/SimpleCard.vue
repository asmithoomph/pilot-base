<script setup lang="ts">
import type { SimpleCardStoryblok } from "~/types/component-types-sb";

const props = defineProps<{ blok: SimpleCardStoryblok }>();

const { useBorderRadius, useShadow } = useStylingUtilities();

const borderRadius = computed(() =>
  useBorderRadius(props.blok.border_radius || "default")
);

const shadow = computed(() => useShadow(props.blok.shadow || false));
</script>

<template>
  <UCard
    v-editable="blok"
    :ui="{
      base: 'overflow-hidden',
      rounded: borderRadius,
      shadow: shadow,
      header: { padding: 'p-0' },
    }"
  >
    <template v-if="blok.image?.filename" #header>
      <NuxtImg
        :src="blok.image?.filename"
        :alt="blok.image?.alt || ''"
        class="w-full h-full aspect-video object-cover"
      />
    </template>
    <div>
      <h2
        class="text-primary-600 dark:text-primary-300 text-xs mb-1 uppercase font-semibold"
      >
        {{ blok.eyebrow }}
      </h2>
      <h3 class="text-2xl font-semibold mb-2.5 font-heading">
        {{ blok.headline }}
      </h3>
      <p class="text-gray-600 dark:text-gray-300">{{ blok.content }}</p>
    </div>
    <template v-if="blok.buttons?.length" #footer>
      <div class="flex gap-x-2.5">
        <StoryblokComponent
          v-for="button in blok.buttons"
          :key="button._uid"
          :blok="button"
        />
      </div>
    </template>
  </UCard>
</template>
