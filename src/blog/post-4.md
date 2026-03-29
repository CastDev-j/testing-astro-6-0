---
slug: "my-fourth-blog-post"
title: My Fourth Blog Post
author: Astro Learner
description: "This post will show up on its own!"
image:
  url: "https://docs.astro.build/default-og-image.png"
  alt: "The word astro against an illustration of planets and stars."
pubDate: 2022-08-08
tags: ["astro", "successes"]
---

This post should show up with my other blog posts, because `import.meta.glob()` is returning a list of all my posts in order to create my list.

## Why this feels powerful

I like that I can create a new markdown file and have it appear automatically in the blog list. No manual imports, no repetitive wiring, just content-first workflow.

## My current post pipeline

This is the flow I am using right now:

1. Create a file in `src/pages/posts/`.
2. Add frontmatter metadata (title, date, description, tags, image).
3. Write content and publish.
4. Let `import.meta.glob()` discover everything.

This keeps the project simple and helps me focus on writing.

## Improvements I want next

I want to keep iterating with a few quality upgrades:

- Better tag filtering.
- Related posts at the bottom of each article.
- Estimated reading time in the post header.
- A cleaner typography system for markdown content.

## Closing thought

Building this blog has taught me that good developer experience matters. The easier publishing is, the more likely I am to keep sharing what I learn.
