<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { StackableStoryblok } from "~/types/component-types-sb";

defineProps<{ blok: StackableStoryblok }>();

const cards = ref<HTMLElement[]>([]);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  cards.value.forEach((card: HTMLElement) => {
    gsap.to(card, {
      scale: 0.9,
      duration: 0.3,
      skewX: 0.5,
      scrollTrigger: {
        trigger: card,
        start: "top 10%",
        scrub: 1,
      },
    });
  });
});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger) => {
    trigger.kill();
  });
});
</script>

<template>
  <section class="space-y-10">
    <div
      v-for="content in blok.content"
      ref="cards"
      :key="content._uid"
      class="top-10 sticky"
    >
      <StoryblokComponent :key="content._uid" :blok="content" />
    </div>
  </section>
</template>
