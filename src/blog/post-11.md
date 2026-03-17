---
title: My Eleventh Blog Post
author: Astro Learner
description: "I added a simple related-posts strategy using tags."
image:
  url: "https://docs.astro.build/assets/rays.webp"
  alt: "The Astro logo on a dark background with rainbow rays."
pubDate: 2022-09-26
tags: ["astro", "features", "tags", "content"]
---

I experimented with showing related posts under each article using shared tags.

## Approach

My idea is intentionally simple:

1. Compare tags of the current post with all others.
2. Sort by number of matching tags.
3. Display the top matches.

## Benefit

Readers can continue exploring similar topics without going back to the index page.

## What is next

I plan to refine the sorting rules so older but highly relevant posts still appear.
