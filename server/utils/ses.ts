import { SendTemplatedEmailCommand, SESClient } from "@aws-sdk/client-ses";
import type { TemplateData } from "~~/types/forms";

const client = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

const validatedKeys = () => {
  if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
    throw createError({
      statusCode: 500,
      message: "Internal Server Error: Missing AWS credentials",
    });
  }
};

export const sendEmail = async (templateData: TemplateData) => {
  try {
    validatedKeys();

    if (!templateData || typeof templateData !== "object") {
      throw createError({
        statusCode: 400,
        statusMessage: "Bad Request: Missing template data",
      });
    }

    const params = {
      Source: "website@oomph.systems",
      Destination: {
        ToAddresses: templateData.config?.recipients?.length
          ? templateData.config?.recipients
          : ["asmith@oomphworks.com"],
      },
      Subject: templateData.subject,
      Template: templateData.config?.template || "default_template",
      TemplateData: JSON.stringify(templateData),
    };

    const command = new SendTemplatedEmailCommand(params);

    await client.send(command);

    return {
      statusCode: 200,
      statusMessage: "Email sent successfully",
    };
  } catch (error) {
    console.error("Error sending email: ", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error: Error sending email",
    });
  }
};
