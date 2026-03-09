import './globals.css';
import { initMocks } from '@/mocks';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
        <>{children}</>
        <SpeedInsights />
      </body>
    </html>
  );
}
