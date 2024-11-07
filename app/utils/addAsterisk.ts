import type { FormKitExtendableSchemaRoot, FormKitNode } from "@formkit/core";

// https://formkit.com/essentials/examples
const isCheckboxAndRadioMultiple = (node: FormKitNode) =>
  (node.props.type === "checkbox" || node.props.type === "radio") &&
  node.props.options;

export const addAsteriskPlugin = (node: FormKitNode) => {
  node.on("created", () => {
    if (!node.props.definition || !node.context || node.type !== "input") {
      return;
    }

    const inputTypeUniqueKey =
      node.props.definition.schemaMemoKey || node.context.type;
    node.props.definition.schemaMemoKey = `required_${
      isCheckboxAndRadioMultiple(node) ? "multi_" : ""
    }${inputTypeUniqueKey}`;
    node.context.isRequired = node.props.parsedRules.some(
      (rule: { name: string }) => rule.name === "required"
    );

    node.on("prop:validation", () => {
      if (!node.context) return;
      node.context.isRequired = node.props.parsedRules.some(
        (rule: { name: string }) => rule.name === "required"
      );
    });

    const schemaFn = node.props.definition
      .schema as FormKitExtendableSchemaRoot;

    node.props.definition.schema = (sectionsSchema = {}) => {
      sectionsSchema[isCheckboxAndRadioMultiple(node) ? "legend" : "label"] = {
        children: [
          "$label",
          {
            $el: "span",
            if: "$isRequired",
            attrs: {
              class: "text-red-500 dark:text-red-400 ml-0.5",
            },
            children: ["*"],
          },
        ],
      };

      return schemaFn(sectionsSchema);
    };
  });
};
