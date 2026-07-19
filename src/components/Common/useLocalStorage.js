import { useEffect, useState } from 'react';

// A useState that mirrors its value to localStorage, and never throws if
// storage is blocked or full (private browsing, quota exceeded, etc).
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignore — storage might be full or blocked
    }
  }, [key, value]);

  return [value, setValue];
}
