import type { APIRoute } from "astro";
export const prerender = false;

export const GET = (async ({ session }) => {
  let number = Math.random();

  session?.set("randomNumber", number);

  return new Response(
    JSON.stringify({
      number,
      message: `Here's a random number: ${number}`,
    }),
  );
}) satisfies APIRoute;
