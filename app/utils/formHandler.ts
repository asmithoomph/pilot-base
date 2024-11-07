import { reset, getNode } from "@formkit/core";
import type { Field, FormConfig } from "~~/types/forms";
import type { FormKitNode } from "@formkit/core";

export async function formHandler(
  data: FormData,
  config: FormConfig,
  form: FormKitNode
) {
  const fields = buildFields(data);
  const toast = useToast();

  try {
    const res = await $fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: fields,
        config: {
          template: config?.template,
          form_name: config?.form_name,
          recipients: config?.recipients || [],
        },
        subject: "New Form Submission",
      }),
    });

    if ((res as { statusCode: number }).statusCode === 200) {
      toast.add({
        title: "Form Submitted",
        description:
          "Thank you for your submission. We will be in touch shortly.",
        color: "green",
      });
      await reset(form);
    }
  } catch {
    toast.add({
      title: "Form Submission Failed",
      description: "There was an error submitting your form. Please try again.",
      color: "red",
    });
  }
}

function buildFields(data: FormData) {
  const fields: Field[] = Object.keys(data).reduce((acc: Field[], key) => {
    const node = getNode(key);

    console.log("node", node);

    acc.push({
      name: node?.props?.label,
      type: node?.type as string,
      value: node?.value as string,
      required: node?.props?.validation === "required",
    });

    return acc;
  }, []);

  return fields;
}
