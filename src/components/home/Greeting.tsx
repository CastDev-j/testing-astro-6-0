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
      <h3 class=" font-semibold text-blue-700">
        {greeting}! Thank you for visiting!
      </h3>
      <button
        class="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        onClick={() => setGreeting(randomMessage())}
      >
        New Greeting
      </button>
    </article>
  );
}
