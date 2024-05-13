import { isRef } from '@/utils';
import { useEffect } from 'react';
import { debounce } from 'lodash-es';

interface MoveOptiopns {
  onDragStart?: (e: MouseEvent) => void;
  onDrop?: (e: MouseEvent) => void;
  onDragEnd?: (e: MouseEvent) => void;
}
export function useMove(
  target: (() => Element) | Element | React.RefObject<Element>,
  options?: MoveOptiopns,
) {
  const { onDragStart, onDragEnd, onDrop } = options || {};

  useEffect(() => {
    const el = typeof target === 'function' ? target() : isRef(target) ? target.current : target;
    if (!el) return;

    const dragStart = debounce((e) => {
      document.addEventListener('mousemove', dragMove);
      document.addEventListener('mouseup', dragEnd);
      el?.addEventListener('dragstart', () => false);
      onDragStart && onDragStart(e as MouseEvent);
    }, 30);

    function dragMove(e: MouseEvent) {
      onDrop && onDrop(e);
    }
    function dragEnd(e: Event) {
      console.log('dragEnd');
      document.removeEventListener('mousemove', dragMove);
      document.removeEventListener('mouseup', dragEnd);
      onDragEnd && onDragEnd(e as MouseEvent);
    }
    el?.addEventListener('mousedown', dragStart);
    return () => {
      el.removeEventListener('mousedown', dragEnd);
    };
  }, []);
}
