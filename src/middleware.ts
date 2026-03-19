import { defineMiddleware, sequence } from "astro:middleware";

const modifyHtml = defineMiddleware(async (context, next) => {
  const response = await next();
  const html = await response.text();
  const redactedHtml = html.replaceAll("Home", "M Home");

  return new Response(redactedHtml, {
    headers: response.headers,
    status: response.status,
  });
});

const setTitle = defineMiddleware(async (context, next) => {
  context.locals.title = "Hello from middleware!";
  return next();
});

const setRewriting = defineMiddleware(async (context, next) => {
  if (context.url.pathname === "/unaccessible") {
    const url = new URL("/route", context.url.origin);

    return next(new Request(url, {}));
    // return context.rewrite(new Request(url, {}));
  }

  return next();
});

export const onRequest = sequence(setRewriting, setTitle, modifyHtml);
