import QueryProvider from "@/providers/QueryProvider";
import "./globals.css";
import { initMocks } from "@/mocks";
import { MSWProvider } from "@/providers/MSWProvider";

// 서버 컴포넌트의 최상단인 layout에서 모킹하겟다!!!! 라는 선언
initMocks();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MSWProvider>
          {/* 프리렌더링 -> 서버에서 미리 h1태그 만들어서 준다 */}
          <h1>제목</h1>
          <QueryProvider>{children}</QueryProvider>
        </MSWProvider>
      </body>
    </html>
  );
}
