export const prerender = false;
import type { APIRoute, GetStaticPaths } from "astro";
import { actions } from "astro:actions";

const userNames = ["Alice", "Bob", "Charlie", "David", "Eve"];

export const GET = (async ({ params, request, callAction }) => {
  const { data, error } = await callAction(actions.greeting.getGreeting, {
    name: "John",
    error: true,
  });

  if (error) {
    console.log("Error from action:", error.message);
  } else {
    console.log("Data from action:", data);
  }

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
