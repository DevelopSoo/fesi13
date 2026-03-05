import { renderHook, waitFor } from "@testing-library/react";
import { useFetch } from "./useFetch";

describe("useFetch 테스트", () => {
  test("데이터를 성공적으로 가져오면 data state에 잘 담기는지 확인", async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        name: "전유영",
        mbti: "INTP",
      }),
    });

    const { result } = renderHook(() => useFetch("https://~~~~~"));

    // 초기값 확인
    expect(result.current.data).toBe(null);
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(null);

    // 데이터 요청이 완료될 때까지 기다림
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.data).toEqual({ name: "전유영", mbti: "INTP" });
      expect(result.current.error).toBe(null);
      expect(globalThis.fetch).toHaveBeenCalledWith("https://~~~~~");
    });
  });

  // 토큰이 없습니다. 인증이 되지 않았습니다. 이메일이 적절하지 않습니다.
  test("서버 에러 처리가 정상적으로 작동하는지 테스트", async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    const { result } = renderHook(() => useFetch("https://api.example.com"));

    // 로딩이 끝날 때까지 기다리기
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    // fetch 실패 -> data는? error는 ??
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe("서버 응답이 정상적이지 않습니다");
  });

  test("네트워크 에러 시 error 상태가 업데이트되는지 확인", async () => {
    globalThis.fetch = jest
      .fn()
      .mockRejectedValue(new Error("failed to fetch"));

    const { result } = renderHook(() => useFetch("https://api.example.com"));

    // 로딩이 끝날 때까지 기다리기
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    // 에러 메세지가 잘 나오는지
    expect(result.current.error).toBe("failed to fetch");
  });
});
