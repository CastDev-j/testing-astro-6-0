---
layout: ../../layouts/PostLayout.astro
title: My Second Blog Post
author: Astro Learner
description: "After learning some Astro, I couldn't stop!"
image:
  url: "https://docs.astro.build/assets/arc.webp"
  alt: "The Astro logo on a dark background with a purple gradient arc."
pubDate: 2022-07-08
tags: ["astro", "blogging", "learning in public", "successes"]
---

After a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!

## What I tried this week

This week I focused on repeating the fundamentals until they felt natural:

1. Creating reusable `.astro` components.
2. Passing props from a page into those components.
3. Keeping styles predictable by grouping related UI in small files.

I noticed that when I keep components small, I make fewer mistakes and can test ideas faster.

## A small win

I created a tiny "status card" component and reused it in two places. It was a small step, but it made the project feel much more maintainable.

```astro
---
const { label, value } = Astro.props;
---

<article>
  <h3>{label}</h3>
  <p>{value}</p>
</article>
```

## What was tricky

At first, I mixed layout concerns and content concerns in the same file. The result worked, but was hard to read. Splitting responsibilities into `Layout`, `Header`, and page content made everything clearer.

## Next focus

In the next post, I want to improve my markdown styling and keep navigation behavior consistent between development and production builds.
