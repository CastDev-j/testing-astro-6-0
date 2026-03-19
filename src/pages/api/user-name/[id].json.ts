export const prerender = false;
import type { APIRoute, GetStaticPaths } from "astro";

const userNames = ["Alice", "Bob", "Charlie", "David", "Eve"];

export const GET = (async ({ params, request }) => {
  console.log(request);

  const id = params.id;

  if (!id || isNaN(+id) || +id < 0 || +id >= userNames.length) {
    return new Response(
      JSON.stringify({
        error: "Invalid user ID. Please provide a valid ID between 0 and 4.",
      }),
      { status: 400 },
    );
  }

  return new Response(
    JSON.stringify({
      id,
      name: userNames[+id],
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
}) satisfies APIRoute;

// export const getStaticPaths = (async () => {
//   return userNames.map((_, index) => ({
//     params: {
//       id: index.toString(),
//     },
//   }));
// }) satisfies GetStaticPaths;
