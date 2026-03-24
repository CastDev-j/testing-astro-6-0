---
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
// Your component script here!
import Banner from '../components/Banner.astro';
import ReactPokemonComponent from '../components/ReactPokemonComponent.jsx';
const myFavoritePokemon = [/* ... */];
const { title } = Astro.props;
---
<!-- HTML comments supported! -->
{/* JS comment syntax is also valid! */}

<Banner />
<h1>Hello, world!</h1>

<!-- Use props and other variables from the component script: -->
<p>{title}</p>

<!-- Include other UI framework components with a `client:` directive to hydrate: -->
<ReactPokemonComponent client:visible />

<!-- Mix HTML with JavaScript expressions, similar to JSX: -->
<ul>
  {myFavoritePokemon.map((data) => <li>{data.name}</li>)}
</ul>

<!-- Use a template directive to build class names from multiple strings or even objects! -->
<p class:list={["add", "dynamic", {classNames: true}]} />
```

## What was tricky

At first, I mixed layout concerns and content concerns in the same file. The result worked, but was hard to read. Splitting responsibilities into `Layout`, `Header`, and page content made everything clearer.

## Next focus

In the next post, I want to improve my markdown styling and keep navigation behavior consistent between development and production builds.
