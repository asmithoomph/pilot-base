<script setup lang="ts">
import type { SiteConfigStoryblok } from "~/types/component-types-sb";

const config = useState<SiteConfigStoryblok>("sb-config");

const agreedToCookies = useCookie("agreedToCookies", {
  default: () => null as boolean | null,
});

const acceptCookies = () => {
  agreedToCookies.value = true;
  location.reload();
};

const route = useRoute();

const isStoryblok = computed(() => (route.query?._storyblok ? true : false));
</script>

<template>
  <template v-if="config?.cookies_enabled">
    <Transition
      enter-active-class="duration-300 ease-out"
      enter-from-class="transform opacity-0 translate-y-full"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="transform opacity-0 translate-y-full"
    >
      <UCard
        v-if="!agreedToCookies && !isStoryblok"
        class="fixed right-1 bottom-1 max-w-xs z-50"
      >
        <h4
          class="font-heading text-xl font-semibold flex items-center gap-x-2"
        >
          <span>
            {{ config.cookie_headline || "Cookies" }}
          </span>
          <UIcon name="i-fa6-solid-cookie-bite" />
        </h4>
        <p class="sm:text-sm text-xs mt-2.5 text-gray-600 dark:text-gray-300">
          {{ config.cookie_text }}
        </p>
        <template #footer>
          <div class="flex gap-x-2.5">
            <UButton label="Accept" size="sm" @click="acceptCookies" />
            <UButton
              label="Learn more"
              variant="link"
              :padded="false"
              to="https://www.cookiesandyou.com/"
              target="_blank"
              size="sm"
              aria-label="Learn more about cookies"
            />
          </div>
        </template>
      </UCard>
    </Transition>
  </template>
</template>
