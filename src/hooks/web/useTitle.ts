import React, { useEffect, useRef } from 'react';
import { isBrowser } from '@/utils/is';

interface Options {
  restoreOnUnmount?: boolean;
}

const defaultOptions: Options = {
  restoreOnUnmount: false,
};

export function useTitle(title?: string, options: Options = defaultOptions) {
  const titleRef = useRef(isBrowser() ? document.title : '');
  const setTitle = (title: string) => {
    document.title = title;
  };
  useEffect(() => {
    setTitle(titleRef.current);
    return () => {
      if (options.restoreOnUnmount) {
        document.title = titleRef.current;
      }
    };
  }, [title]);
  return setTitle;
}
