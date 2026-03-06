import { render, screen } from "@testing-library/react";
import Home from "./page";
import { server } from "@/mocks/server";
import { http, HttpResponse } from "msw";

describe("MSW 모킹 테스트", () => {
  test("상세 데이터 모킹", async () => {
    render(<Home />);

    const postItem = await screen.findByText("1: 첫 번째 게시글");
    expect(postItem).toBeInTheDocument();
  });

  test("서버 에러 시 모킹 테스트", async () => {
    // 에러를 모킹
    server.use(
      http.get("http://localhost:4000/posts/1", () => {
        return HttpResponse.json(null, { status: 500 });
      }),
    );

    render(<Home />);

    const error = await screen.findByText("데이터를 불러오는데 실패했습니다.");

    expect(error).toBeInTheDocument();
  });

  test("네트워크 에러 시", () => {
    server.use(
      http.get("http://localhost:4000/posts/1", () => {
        return HttpResponse.error();
      }),
    );
  });
});
