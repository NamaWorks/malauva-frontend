import { useCallback, useRef } from 'react';

const useDebounceClick = (fnToDebounce: () => void, delay: number = 2000) => {
  const timer = useRef<number | undefined | null>(null);

  const debouncedClick = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      fnToDebounce();
    }, delay);
  }, [fnToDebounce, delay]);

  return debouncedClick;
};

export default useDebounceClick;