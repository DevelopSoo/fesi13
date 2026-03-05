import { act, renderHook } from "@testing-library/react";
import { useInputs } from "./useInputs";

describe("useInputs 테스트", () => {
  test("useInputs의 인자로 들어간 초기값이 올바르게 설정되는지 확인", () => {
    const { result } = renderHook(() =>
      useInputs({
        name: "",
        nickname: "",
      }),
    );

    expect(result.current.values).toEqual({
      name: "",
      nickname: "",
    });
  });

  test("handleChange 함수가 값을 올바르게 업데이트 하는지 확인", () => {
    const { result } = renderHook(() =>
      useInputs({
        email: "",
        password: "",
      }),
    );

    const event = {
      target: {
        name: "email",
        value: "승기@naver.com",
      },
    } as React.ChangeEvent<HTMLInputElement>;
    // event-> target-> value, name
    act(() => {
      // 자체적으로 state 를 변경하는 함수
      result.current.handleChange(event);
    });

    expect(result.current.values.email).toBe("승기@naver.com");
    expect(result.current.values).toEqual({
      email: "승기@naver.com",
      password: "",
    });
  });

  test("handleChange 함수로 여러 값을 업데이트할 때 올바르게 동작하는지 확인", () => {
    const { result } = renderHook(() =>
      useInputs({
        email: "",
        password: "",
      }),
    );

    const emailEvent = {
      target: {
        name: "email",
        value: "서윤@gmail.com",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    const passwordEvent = {
      target: {
        name: "password",
        value: "123456",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      // email
      result.current.handleChange(emailEvent);
      // password
      result.current.handleChange(passwordEvent);
    });

    expect(result.current.values).toEqual({
      email: "서윤@gmail.com",
      password: "123456",
    });
  });

  test("handleDelete 함수가 특정 필드를 올바르게 삭제하는지 확인", () => {
    const { result } = renderHook(() =>
      useInputs({
        email: "인영@paran.com",
        password: "인영짱",
      }),
    );

    act(() => {
      result.current.handleDelete("email");
    });

    expect(result.current.values).toEqual({
      email: "",
      password: "인영짱",
    });
  });
});
