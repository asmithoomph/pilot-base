<script setup lang="ts">
import { register } from "swiper/element/bundle";
import type { CarouselStoryblok } from "~/types/component-types-sb";

callOnce(() => {
  register();
});

const props = defineProps<{ blok: CarouselStoryblok }>();

const { useSpaceBetween } = useStylingUtilities();
const spaceBetween = computed(() => useSpaceBetween(props.blok.gutter));

const breakpoints = {
  640: {
    slidesPerView: Math.min(2, parseInt(props.blok.slides_per_view || "1")),
    spaceBetween: spaceBetween.value,
  },
  768: {
    slidesPerView: Math.min(2, parseInt(props.blok.slides_per_view || "1")),
    spaceBetween: spaceBetween.value,
  },
  1024: {
    slidesPerView: props.blok.slides_per_view,
    spaceBetween: spaceBetween.value,
  },
};
</script>

<template>
  <div v-editable="blok" class="@container/carousel">
    <swiper-container
      :slides-per-view="1"
      :space-between="spaceBetween"
      :scrollbar-hide="false"
      :breakpoints="breakpoints"
    >
      <swiper-slide v-for="slide in blok.slides" :key="slide._uid">
        <div class="py-2.5 px-px h-full">
          <StoryblokComponent :blok="slide" />
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>
