import { useEffect, useRef } from "react";

export default function useTimeout(callback: () => any, delay: number) {
  const timeoutRef = useRef<NodeJS.Timeout>();
  const callbackRef = useRef(callback);

  useEffect(() => (callbackRef.current = callback));

  useEffect(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
    return () => window.clearTimeout(timeoutRef.current);
  }, [delay]);

  return timeoutRef;
}
