// app/page.tsx

"use client";

import useCounterStore from "@/stores/useCounterStore";

export default function Home() {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div className="flex h-screen items-center justify-center gap-2">
      <button
        className="rounded-md bg-red-500 p-2 text-white"
        onClick={decrement}
      >
        감소
      </button>
      <p>Count: {count}</p>
      <button
        className="rounded-md bg-blue-500 p-2 text-white"
        onClick={increment}
      >
        증가
      </button>
    </div>
  );
}
