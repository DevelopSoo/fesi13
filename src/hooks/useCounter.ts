import { useState } from "react";

export const useCounter = (initialValue: number = 0) => {
  const [count, setCount] = useState(initialValue);
  // 로직 거의 없음
  // setState
  // useState 기능 테스트...?
  // 외부 라이브러리는 테스트해야 한다? vs 아니다?
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialValue);

  return {
    count,
    increment,
    decrement,
    reset,
  };
};
