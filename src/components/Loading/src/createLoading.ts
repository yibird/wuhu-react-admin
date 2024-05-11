import React, { useState, createElement, createRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import type { LoadingProps } from './types';
import { Loading } from './Loading';

export function CreateLoading(props: LoadingProps, target?: HTMLElement, wait = false) {
  const [data, setData] = useState<LoadingProps>({
    tip: '',
    loading: true,
    ...props,
  });

  const ref = createRef<HTMLDivElement>();
  const LoadingWrap = createElement(Loading, { ...data, ref });

  useEffect(() => {
    const el = document.createElement('div');
    if (wait) {
      setTimeout(() => {
        ReactDOM.createRoot(el).render(LoadingWrap);
      }, 0);
    } else {
      ReactDOM.createRoot(el).render(LoadingWrap);
    }
    if (target) {
      open(target);
    }
  });

  function open(target: HTMLElement = document.body) {
    if (!ref.current) return;
    target.appendChild(ref.current);
  }
  function close() {
    if (ref.current && ref.current.parentNode) {
      ref.current.parentNode.removeChild(ref.current);
    }
  }
  function setTip(tip: string) {
    setData({ ...data, tip });
  }

  return {
    open,
    close,
    setTip,
  };
}
