import { RefObject, useEffect, useRef } from 'react';
import { debounce } from 'lodash-es';
type Direction = 'left' | 'auto' | 'right';

interface UseRollPageMethod {
  autoRollPage: (index: number) => void;
  autoRollElement: (el: HTMLElement, index: number) => void;
  rollPageLeft: React.MouseEventHandler;
  rollPageRight: React.MouseEventHandler;
}

const getTransformX = (el: HTMLElement) => {
  const { transform } = el.style;
  if (!transform) return 0;
  const start = transform.indexOf('(') + 1;
  const end = transform.indexOf(')') || transform.indexOf(',');
  return parseFloat(transform.substring(start, end));
};

/**
 * 滚动tab
 * @param el 滚动元素
 * @param type 滚动方向
 * @param index 滚动下标
 */
function rollPage(el: HTMLElement, type: Direction = 'auto', index?: number) {
  // 获取容器下所有li
  const items = Array.from(el.getElementsByTagName('li'));
  // 获取容器的宽度
  const outerWidth = el.offsetWidth;
  // 获取容器偏移量
  const offsetLeft = getTransformX(el);
  if (type === 'left') {
    if (!offsetLeft && offsetLeft <= 0) return;
    // 当前偏移量left - 可视宽度,用于上一轮的页码比较
    const prevOffsetLeft = -offsetLeft - outerWidth;
    for (let i = 0, len = items.length; i < len; i++) {
      if (items[i].offsetLeft >= prevOffsetLeft) {
        el.style.transform = `translateX(${-items[i].offsetLeft}px)`;
        return;
      }
    }
  }
  if (type === 'right') {
    for (let i = 0, len = items.length; i < len; i++) {
      if (items[i].offsetLeft + items[i].offsetWidth >= outerWidth - offsetLeft) {
        el.style.transform = `translateX(${-items[i].offsetLeft}px)`;
        return;
      }
    }
  }
  if (type === 'auto') {
    if (typeof index === 'undefined') return;
    // 获取当前tab
    const thisTab = items[index];
    if (!thisTab) return;
    const thisTabLeft = thisTab.offsetLeft,
      itemOuterWidth = thisTab.offsetWidth;
    // 当目标标签在可视区左侧时
    if (thisTabLeft < -offsetLeft) {
      el.style.transform = `translateX(${-thisTabLeft}px)`;
      return;
    }
    // 当前目标标签在可视区右侧时
    if (thisTabLeft + itemOuterWidth >= outerWidth - offsetLeft) {
      const subLeft = thisTabLeft + itemOuterWidth - (outerWidth - offsetLeft);
      for (let i = 0, len = items.length; i < len; i++) {
        const item = items[i],
          left = item.offsetLeft;
        // 从当前可视区域的最左第二个节点遍历,如果减去最左节点的差 > 目标在右侧不可见宽度,则将该节点放置可视区最左
        if (left + offsetLeft > 0) {
          if (left - offsetLeft > subLeft) {
            el.style.transform = `translateX(${-(left + i * 8)}px)`;
            return;
          }
        }
      }
    }
  }
}

export function useRollPage(targetRef: RefObject<HTMLElement>): UseRollPageMethod {
  const handleRollPage = (direction: Direction, index?: number) => {
    if (!targetRef.current) return;
    rollPage(targetRef.current, direction, index);
  };
  const currentRef = useRef(0);
  function autoRollPage(index: number) {
    currentRef.current = index;
    return handleRollPage('auto', index);
  }
  function autoRollElement(el: HTMLElement, index: number) {
    setTimeout(() => rollPage(el, 'auto', index), 0);
  }

  const handleResize = debounce(() => {
    autoRollPage(currentRef.current);
  }, 30);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    autoRollPage,
    autoRollElement,
    rollPageLeft: () => handleRollPage('left'),
    rollPageRight: () => handleRollPage('right'),
  };
}
