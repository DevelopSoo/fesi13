import { act, renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter 테스트", () => {
  test("useCounter 훅의 인자값이 count의 초기값으로 잘 세팅되는지 확인", () => {
    // render
    // renderHook
    const { result } = renderHook(() => useCounter(5));

    // result => current =>
    expect(result.current.count).toBe(5);
  });

  test("increment 함수가 count 값을 1 증가시키는지 확인", () => {
    const { result } = renderHook(() => useCounter(0));

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    // state 변경 -> 확인하는 시간 vs 변경되는 시간
    // await screen.findBy~ -> 요소
    // 컴포넌트 X -> findBy는 요소 찾는 놈
    expect(result.current.count).toBe(1);
  });

  test("decrement 함수가 count 값을 1 감소시키는지 확인", () => {
    const { result } = renderHook(() => useCounter(2));

    expect(result.current.count).toBe(2);
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(1);
  });

  test("reset 함수가 count 값을 초기값으로 되돌리는지 확인", () => {
    const { result } = renderHook(() => useCounter(3));
    expect(result.current.count).toBe(3);

    act(() => {
      result.current.increment();
      result.current.increment();
    });

    expect(result.current.count).toBe(5);

    act(() => {
      result.current.reset();
    });

    expect(result.current.count).toBe(3);
  });
});
