import type { InferEntrySchema } from "astro:content";

export interface Post extends InferEntrySchema<"blog"> {}
