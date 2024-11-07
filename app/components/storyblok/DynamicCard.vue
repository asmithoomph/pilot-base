<script setup lang="ts">
import type { DynamicCardStoryblok } from "~~/types/component-types-sb";

const props = defineProps<{ blok: DynamicCardStoryblok }>();

const { useBorderRadius, useShadow, useCardPadding } = useStylingUtilities();

const borderRadius = computed(() =>
  useBorderRadius(props.blok.border_radius || "default")
);

const shadow = computed(() => useShadow(props.blok.shadow || false));

const paddingClasses = computed(() => ({
  header: useCardPadding(props.blok.header_padded || false),
  body: useCardPadding(props.blok.body_padded || false),
  footer: useCardPadding(props.blok.footer_padded || false),
}));
</script>

<template>
  <UCard
    v-editable="blok"
    class="@container"
    :ui="{
      base: 'overflow-hidden',
      rounded: borderRadius,
      shadow: shadow,
      header: { padding: paddingClasses.header },
      body: { padding: paddingClasses.body },
      footer: { padding: paddingClasses.footer },
    }"
  >
    <template v-if="blok.header_content?.length" #header>
      <StoryblokComponent
        v-for="header in blok.header_content"
        :key="header._uid"
        :blok="header"
      />
    </template>
    <div v-if="blok.body_content?.length">
      <StoryblokComponent
        v-for="body in blok.body_content"
        :key="body._uid"
        :blok="body"
      />
    </div>
    <template v-if="blok.footer_content?.length" #footer>
      <StoryblokComponent
        v-for="footer in blok.footer_content"
        :key="footer._uid"
        :blok="footer"
      />
    </template>
  </UCard>
</template>
