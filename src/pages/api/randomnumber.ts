import type { APIRoute } from "astro";
export const prerender = false;

export const GET = (async ({}) => {
  let number = Math.random();
  return new Response(
    JSON.stringify({
      number,
      message: `Here's a random number: ${number}`,
    }),
  );
}) satisfies APIRoute;
