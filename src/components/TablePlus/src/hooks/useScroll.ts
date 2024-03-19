import React, { Ref, RefObject, useEffect, useState } from 'react';
import type { Scroll } from '../types';

export function useScroll(
  ref: RefObject<HTMLDivElement>,
  initialValue: Scroll = { x: 'max-content', y: 300 },
) {
  const [scroll, setScroll] = useState(initialValue);

  // 计算table header高度
  function computeHeaderHeight(tableEl: HTMLDivElement) {
    const el = tableEl.querySelector('.ant-table-thead');
    if (!el) return 0;
    return el.clientHeight;
  }

  // 计算table分页器高度
  function computePaginationHeight(tableEl: HTMLDivElement) {
    const el = tableEl.querySelector('.ant-pagination');
    if (!el) return 0;
    const { marginTop, marginBottom } = window.getComputedStyle(el);
    return el.clientHeight + parseFloat(marginTop) + parseFloat(marginBottom);
  }

  // 计算table高度
  function computeHeight() {
    const el = ref.current;
    if (!el) return scroll.y;
    const headerH = computeHeaderHeight(el);
    const paginationH = computePaginationHeight(el);
    const y = el.clientHeight - headerH - paginationH;
    setScroll({ ...scroll, y });
  }

  useEffect(() => {
    computeHeight();
  }, []);
  return {
    scroll,
    computeHeight,
  };
}
