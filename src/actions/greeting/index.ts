import { z } from "astro/zod";
import { defineAction, ActionError } from "astro:actions";

export const greeting = {
  getGreeting: defineAction({
    input: z.object({
      name: z.string(),
      error: z.boolean().optional(),
    }),
    handler: async (input, context) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (input.error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: "An error occurred while processing your request.",
        });
      }

      const randomNumber = await context.session?.get("randomNumber");
      if (randomNumber) {
        return `Hello, ${input.name}! Your random number is ${randomNumber}.`;
      }

      return `Hello, ${input.name}! `;
    },
  }),
};
