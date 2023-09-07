import React, { useEffect, useState, useCallback } from 'react';
import { on, off } from '@/utils/dom';
import { throttle } from 'lodash-es';

export function useClickOutside(
  ref: React.MutableRefObject<Element | null>,
  callback?: () => void,
) {
  const [outside, setOutside] = useState(false);

  const handleClick: React.MouseEventHandler = (e) => {
    if (!ref.current) return;
    if (ref.current.contains(e.target as Node)) {
      setOutside(false);
      return;
    }
    typeof callback === 'function' && callback();
    setOutside(true);
  };
  const handle = throttle(handleClick, 10);

  useEffect(() => {
    on(document, 'click', handle);
    return () => off(document, 'click', handle);
  }, []);

  return outside;
}
