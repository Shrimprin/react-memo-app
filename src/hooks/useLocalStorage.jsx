import { useState } from "react";

export default function useLocalStorage(key) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item != null ? JSON.parse(item) : [];
  });

  const setValue = (value) => {
    // 関数が渡された場合、その関数にstoredValueを渡して実行する
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [storedValue, setValue];
}
