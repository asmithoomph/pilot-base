<script setup lang="ts">
import type { BreadcrumbsStoryblok } from "~~/types/component-types-sb";

const props = defineProps<{ blok: BreadcrumbsStoryblok }>();

const links = useBreadcrumbItems({
  hideRoot: props.blok.hide_root || false,
  hideCurrent: props.blok.hide_current || false,
});
</script>

<template>
  <UBreadcrumb v-editable="blok" :links="links" class="my-2.5" />
</template>
