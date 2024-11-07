<script setup lang="ts">
import type { AppInputStoryblok } from "~~/types/component-types-sb";

defineProps<{ blok: AppInputStoryblok }>();

const inputModel = defineModel<string | undefined>();
</script>

<template>
  <FormKit
    :id="blok._uid"
    v-model="inputModel"
    v-editable="blok"
    :outer-class="blok.full_width ? 'col-span-full' : ''"
    :type="blok.type || 'text'"
    :label="blok.label"
    :placeholder="blok.placeholder"
    :name="blok._uid"
    :validation="blok.validation?.join('|')"
  />
</template>
