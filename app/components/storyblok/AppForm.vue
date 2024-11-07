<script setup lang="ts">
import type { AppFormStoryblok } from "~~/types/component-types-sb";
import type { FormKitNode } from "@formkit/core";

const props = defineProps<{ blok: AppFormStoryblok }>();

const formConfig = {
  form_name: props.blok.name || "default_form",
  recipients:
    props.blok.recipients?.split(",").map((email: string) => email.trim()) ||
    [],
  template: "default_template",
};

const submit = async (data: FormData, node: FormKitNode) => {
  await formHandler(data, formConfig, node);
};
</script>

<template>
  <div v-editable="blok" class="@container/form">
    <FormKit
      :id="blok._uid"
      v-slot="{ disabled }"
      type="form"
      :name="blok.name"
      :actions="false"
      use-local-storage
      @submit="submit"
    >
      <div class="grid @xl/form:grid-cols-2 grid-cols-1 gap-1.5 sm:gap-4">
        <StoryblokComponent
          v-for="field in blok.fields"
          :key="field._uid"
          :blok="field"
        />
      </div>
      <StoryblokComponent
        v-for="button in blok.buttons"
        :key="button._uid"
        :blok="button"
        :loading="disabled || false"
      />
    </FormKit>
  </div>
</template>
