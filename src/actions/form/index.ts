import { z } from "astro/zod";
import { ActionError, defineAction } from "astro:actions";

export const form = {
  submitForm: defineAction({
    accept: "form",
    input: z.object({
      name: z.string(),
      email: z.email(),
    }),
    handler: async (input) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (input.name === "error") {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: "An error occurred while processing your request.",
        });
      }

      return `Form submitted successfully! Name: ${input.name}, Email: ${input.email}`;
    },
  }),
};
