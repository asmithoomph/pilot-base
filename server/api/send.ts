import type { Field } from "~~/types/forms";
import type { NuxtError } from "#app";

function validateFields(fields: Field[]) {
  if (!Array.isArray(fields)) {
    throw createError({
      statusCode: 400,
      message: "Bad Request: Fields must be an array",
    });
  }

  fields.forEach((field) => {
    const { name, value, required } = field as Field;

    if (typeof field !== "object" || field === null) {
      throw createError({
        statusCode: 400,
        message: "Bad Request: Field must be an object",
      });
    }

    if (typeof name !== "string") {
      throw createError({
        statusCode: 400,
        message: "Bad Request: Field name must be a string",
      });
    }

    if (typeof required !== "boolean") {
      throw createError({
        statusCode: 400,
        message: "Bad Request: Field required must be a boolean",
      });
    }

    if (required && !value) {
      throw createError({
        statusCode: 400,
        statusMessage: `Bad request: missing value for required field '${name}'.`,
      });
    }
  });
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    if (!body || !Array.isArray(body.data)) {
      throw createError({
        statusCode: 400,
        statusMessage: "Bad Request: Missing data array",
      });
    }

    validateFields(body.data);

    await sendEmail(body);

    return {
      statusCode: 200,
      statusMessage: "Email has been sent successfully",
    };
  } catch (error) {
    throw createError({
      statusCode: (error as NuxtError).statusCode || 500,
      statusMessage: (error as NuxtError).statusMessage,
    });
  }
});
