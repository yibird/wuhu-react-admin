import { useEffect, useRef } from 'react';
import { debounce } from 'lodash-es';
export interface UseWindowSizeOptions {
  wait?: number;
  once?: boolean;
  immediate?: boolean;
  listenerOptions?: AddEventListenerOptions | boolean;
}
export function useWindowSizeFn(callback: AnyFunction, options: UseWindowSizeOptions = {}) {
  const { wait = 150, immediate } = options;

  const handle = useRef(debounce(() => callback(), wait));

  const start = () => {
    if (immediate) {
      handle.current();
    }
    window.addEventListener('resize', handle.current);
  };

  const stop = () => {
    window.removeEventListener('resize', handle.current);
  };

  useEffect(() => {
    start();
    return () => stop();
  }, []);
  return { start, stop };
}
