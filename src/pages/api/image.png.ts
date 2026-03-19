import type { APIRoute } from "astro";

export const GET = (async ({ params, request, url }) => {
  const theme = url.searchParams.get("theme") || "light";

  const response = await fetch(
    theme === "dark"
      ? "https://docs.astro.build/assets/full-logo-dark.png"
      : "https://docs.astro.build/assets/full-logo-light.png",
  );
  const buffer = await response.blob();

  return new Response(buffer, {
    headers: { "Content-Type": "image/png" },
  });
}) satisfies APIRoute;
