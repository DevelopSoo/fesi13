// src/providers/MSWComponent.tsx

"use client";

import { useEffect, useState } from "react";
import { initMocks } from "@/mocks";

export const MSWComponent = ({ children }: { children: React.ReactNode }) => {
  // 개발환경에서만 MSW 세팅하면 되잖아?
  const [mswReady, setMswReady] = useState(
    // 개발환경이 아니면 true -> 개발환경 false
    process.env.NODE_ENV !== "development",
  );
  useEffect(() => {
    const init = async () => {
      await initMocks();
      setMswReady(true);
    };

    if (!mswReady) {
      init();
    }
  }, [mswReady]);

  if (!mswReady) {
    return null;
  }

  return <>{children}</>;
};
