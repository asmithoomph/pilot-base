<script setup lang="ts">
import type { AppButtonStoryblok } from "~/types/component-types-sb";
import type { ButtonColor, ButtonSize, ButtonVariant } from "#ui/types";

const props = defineProps<{ blok: AppButtonStoryblok; loading: boolean }>();

const { useBorderRadius } = useStylingUtilities();

const borderRadius = computed(() =>
  useBorderRadius(props.blok.border_radius || "default")
);

const buttonPath = computed(() => useStoryblokLink(props.blok.path));
</script>

<template>
  <UButton
    v-editable="blok"
    :to="buttonPath"
    :target="blok.target || '_self'"
    :label="blok.label"
    :icon="blok.icon.icon"
    :trailing="blok.icon_trailing || false"
    :color="blok.color as ButtonColor || 'primary'"
    :size="blok.size as ButtonSize || 'md'"
    :variant="blok.variant as ButtonVariant || 'solid'"
    :padded="blok.padded || false"
    :block="blok.block || false"
    :type="blok.type || 'button'"
    :ui="{ rounded: borderRadius, base: 'z-50' }"
    :loading="loading || false"
  />
</template>
