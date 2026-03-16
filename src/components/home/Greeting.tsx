import { cn } from "@lib/cn";
import { useState } from "preact/hooks";

interface GreetingProps {
  messages: string[];
}

export default function Greeting({ messages }: GreetingProps) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <article class="w-full flex flex-col items-center ">
      <h3 class=" font-semibold text-blue-700 dark:text-blue-300 text-lg">
        {greeting}! Thank you for visiting!
      </h3>
      <button
        class={cn(
          " mt-2 px-4 py-2 rounded transition-colors bg-button-primary-bg text-button-primary-text hover:bg-button-primary-bg-hover",
        )}
        onClick={() => setGreeting(randomMessage())}
      >
        New Greeting
      </button>
    </article>
  );
}
