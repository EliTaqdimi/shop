import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setvalue] = useState<T>(() => {
    let localCart = localStorage.getItem("cartItems");

    if (localCart != null) return JSON.parse(localCart);
    else {
      return initialValue;
    }
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setvalue] as [typeof value, typeof setvalue];
}
