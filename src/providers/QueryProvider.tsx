// src/providers/QueryProvider.tsx

"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(
    () =>
      // API 호출 캐싱관리하는 도구다
      // 브라우저 <-> 서버 (API 호출)
      // 브라우저 1분 동안 100번 여러 번 호출 -> 100번 API 호출 (너무 많다...)
      // 100명 -> 100 * 100 -> 1분에 10000번 호출

      // 1분 동안은 캐싱을 한다.
      // 브라우저 1분 동안 100번 여러 번 호출 -> 똑같은 API는 1번만 호출 (브라우저에 저장된 데이터를 그냥 가져다 쓴다.)
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1분
            // 필요에 따라 다른 옵션 설정
          },
        },
      }),
  );

  return (
    // children 안에 있는 모든 컴포넌트는 react query 의 캐싱을 활용한다. (useQuery, useMutation 를 사용할 수 있다.)
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
