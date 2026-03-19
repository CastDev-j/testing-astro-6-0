export const prerender = false;
import type { APIRoute } from "astro";

const pokemonApiUrl = "https://pokeapi.co/api/v2/pokemon";

export const GET = (async ({ params }) => {
  const { id } = params;

  if (!id || isNaN(+id) || +id < 1) {
    return new Response(
      JSON.stringify({
        error: "Invalid Pokémon ID. Please provide a valid ID greater than 0.",
      }),
      { status: 400 },
    );
  }

  console.log(id);

  const response = await fetch(`${pokemonApiUrl}/${id}`);

  if (response.status === 404) {
    return new Response(
      JSON.stringify({
        error: `Pokémon with ID ${id} not found.`,
      }),
      { status: 404 },
    );
  }

  const pokemonData = await response.json();

  return new Response(JSON.stringify(pokemonData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}) satisfies APIRoute;
