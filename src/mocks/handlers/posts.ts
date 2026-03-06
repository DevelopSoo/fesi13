import { http, HttpResponse } from "msw";

export const postsHandlers = [
  // API 모킹
  http.get("http://localhost:4000/posts", () => {
    return HttpResponse.json([
      { id: 1, title: "테스트 제목", body: "테스트 본문" },
      { id: 2, title: "두번째 제목", body: "두번째 본문" },
    ]);
  }),

  http.get("http://localhost:4000/posts/:id", ({ params }) => {
    return HttpResponse.json({
      id: Number(params.id),
      title: "첫 번째 게시글",
      body: `내용 ${params.id}`,
    });
  }),
];
