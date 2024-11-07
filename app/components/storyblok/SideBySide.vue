<script setup lang="ts">
import { computed } from "vue";
import type { SideBySideStoryblok } from "~~/types/component-types-sb";

const props = defineProps<{ blok: SideBySideStoryblok }>();

const { useFlexAlign, useGutter } = useStylingUtilities();

const alignment = computed(() =>
  useFlexAlign(props.blok.alignment || "center")
);

const gutter = computed(() => useGutter(props.blok.gap || "xl"));

const colClasses = computed(() => {
  const layouts = {
    "50_50": ["col-span-5", "col-span-5"],
    "60_40": ["md:col-span-7 col-span-6", "md:col-span-5 col-span-6"],
    "40_60": ["md:col-span-5 col-span-6", "md:col-span-7 col-span-6"],
  };
  return layouts[props.blok.layout || "50_50"] || layouts["50_50"];
});
</script>

<template>
  <div v-editable="blok" class="@container/two-col">
    <div :class="['grid lg:grid-cols-12 gap-10', alignment, gutter]">
      <div :class="[colClasses[0], 'space-y-10']">
        <StoryblokComponent
          v-for="leftBlok in blok.left_col"
          :key="leftBlok._uid"
          :blok="leftBlok"
        />
      </div>
      <div :class="[colClasses[1], 'space-y-10']">
        <StoryblokComponent
          v-for="rightBlok in blok.right_col"
          :key="rightBlok._uid"
          :blok="rightBlok"
        />
      </div>
    </div>
  </div>
</template>
