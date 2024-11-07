import type { MultilinkStoryblok } from "~/types/component-types-sb";

export const useStoryblokPreview = () => {
  const route = useRoute();
  const env = useRuntimeConfig().public.SITE_ENV;

  const isPublished = route.query._storyblok_published !== undefined;
  const isStoryblok = route.query._storyblok !== undefined;
  const isDraft = env === "preview";

  if (isPublished) {
    return false;
  }

  return isDraft || isStoryblok ? true : false;
};

export const useStoryblokLink = (link: MultilinkStoryblok | undefined) => {
  if (link?.linktype === "story") {
    return link.story?.full_slug || undefined;
  }

  if (link?.linktype === "url") {
    return link.url || undefined;
  }

  if (link?.linktype === "email") {
    return `mailto:${link.url}`;
  }

  return undefined;
};
