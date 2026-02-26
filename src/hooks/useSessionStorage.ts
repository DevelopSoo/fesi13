// src/hooks/useSessionStorage.ts

import { useState, useEffect } from "react";

export function useSessionStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  // 초기값 설정을 useState의 초기값으로 설정하셔도 됩니다.
  // 다만 실제 사용 시 컴포넌트에서 해당 부분을 dynamic import를 사용해야 할 수도 있습니다.
  useEffect(() => {
    const initialize = () => {
      const item = sessionStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    };
    initialize();
  }, [key]);

  const setValue = (value: T) => {
    sessionStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };

  const removeValue = () => {
    sessionStorage.removeItem(key);
    setStoredValue(initialValue);
  };

  return [storedValue, setValue, removeValue] as const;
}
