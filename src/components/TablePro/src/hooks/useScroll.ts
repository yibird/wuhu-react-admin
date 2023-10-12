import { useEffect, useMemo, useRef, useState } from 'react';
import { useMount } from 'ahooks';
import { isBool } from '@/utils/is';
import { useWindowSizeFn } from '@/hooks/event';
import type { TableProProps } from '../types';

enum Selector {
  HEADER = '.table-header',
  THEAD = '.ant-table-header',
  TBODY = '.ant-table-body',
  PAGINATION = '.ant-table-pagination',
}

export function useScroll(
  { dataSource, autoHeight = true, size, scroll, header, pagination }: TableProProps,
  tableRef: React.RefObject<HTMLDivElement>,
) {
  const [tableHeight, setTableHeight] = useState(0);
  const paginationRef = useRef<HTMLElement | null>(null),
    footerEl = useRef<HTMLElement | null>(null),
    bodyRef = useRef<HTMLElement | null>(null);

  useMount(() => {
    computeTableHeight();
  });

  // 处理滚动条
  function handleScrollBar(bodyEl: HTMLElement) {
    const hasScrollX = bodyEl.scrollWidth >= bodyEl.clientWidth;
    const hasScrollY = bodyEl.scrollHeight >= bodyEl.clientHeight;
    return [hasScrollX, hasScrollY];
  }

  function computeHeaderHeight(tableEl: Element) {
    const headerHeight = 0;
    if (header) {
      const headerEl = tableEl.querySelector(Selector.HEADER) as HTMLElement;
      return headerEl.offsetHeight;
    }
    return headerHeight;
  }
  function computePaginationHeight(tableEl: Element) {
    if (!paginationRef.current) {
      paginationRef.current = tableEl.querySelector(Selector.PAGINATION) as HTMLElement;
    }
    let paginationHeight = 0;
    if (!(isBool(pagination) && !pagination)) {
      const paginationEl = paginationRef.current;
      if (paginationEl) {
        const style = window.getComputedStyle(paginationEl);
        paginationHeight =
          paginationEl.offsetHeight + parseFloat(style.marginTop) + parseFloat(style.marginBottom);
      }
    }
    return paginationHeight;
  }

  function computeTableHeight() {
    const tableEl = tableRef.current as Element;
    if (!tableEl) return;
    if (!bodyRef.current) {
      bodyRef.current = tableEl.querySelector(Selector.TBODY);
      if (!bodyRef.current) return;
    }
    const bodyEl = bodyRef.current;

    const tableElHeight = (tableEl as HTMLElement).offsetHeight;
    const headerHeight = computeHeaderHeight(tableEl);
    const paginationHeight = computePaginationHeight(tableEl);
    let height = tableElHeight - headerHeight - paginationHeight;
    const [, hasScrollY] = handleScrollBar(bodyEl!);
    if (hasScrollY) {
      const tHeadEl = tableEl.querySelector(Selector.THEAD) as HTMLElement;
      height -= tHeadEl.offsetHeight;
    }
    setTableHeight(height);
  }

  function redoHeight() {
    setTimeout(computeTableHeight);
  }

  useEffect(redoHeight, [dataSource, size]);
  useWindowSizeFn(redoHeight);

  const getScroll: TableProProps['scroll'] = useMemo(() => {
    if (!autoHeight) return scroll;
    return {
      y: tableHeight || '100%',
      x: '100%',
      ...scroll,
    };
  }, [tableHeight, autoHeight, scroll]);

  return { getScroll, redoHeight };
}
