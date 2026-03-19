import type { APIRoute } from "astro";

export const GET = (async ({ params, request, url, redirect }) => {
  const theme = url.searchParams.get("theme") || "light";

  if (theme !== "dark" && theme !== "light") {
    return redirect("/api/image.png?theme=light", 307);
  }

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
