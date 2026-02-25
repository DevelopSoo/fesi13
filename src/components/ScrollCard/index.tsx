// src/components/ScrollCard/index.tsx

"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ScrollCard({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // start end: 타겟의 시작점(start)이 뷰포트의 아래(end)를 지나는 순간이
    // 스크롤 진행률이 0이 되는 순간이다
    // end start: 타겟의 끝점(end)이 뷰포트의 위(start)를 지나는 순간이 스크롤 진행률이 1이다.
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    // 스크롤 진행률이 0 -> 0.3 -> 0.7 -> 1 일 때
    [0, 0.3, 0.7, 1],
    // 반환값이 0.3 -> 1 -> 1 -> 0.3 으로 된다.
    [0.3, 1, 1, 0.3],
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    // y 값이 아래로 200 -> 원래 자리인 0 => 0 -> 위로 200
    [200, 0, 0, -200],
  );

  const scale = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.6, 0.8],
    [0.8, 1, 1, 0.8],
  );

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        y,
        scale,
      }}
      className="h-64 rounded-xl bg-gray-400 p-6"
    >
      {children}
    </motion.div>
  );
}
