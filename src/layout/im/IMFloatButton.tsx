import React, { useMemo, useRef, useState, useEffect } from 'react';
import { Icon } from '@/components';
import { Badge } from 'antd';
import type { IMFloatButton } from './types';
import { useMove } from '@/hooks';
import { createPortal } from 'react-dom';

function IMFloatButton({ onClick, zIndex = 100, style, className }: IMFloatButton) {
  const [position, setPosition] = useState<{ x: string | number; y: string | number }>({
    x: 20,
    y: 20,
  });
  const ref = useRef<HTMLDivElement>(null);

  const getStyle = useMemo(() => {
    console.log('123123');
    return {
      backgroundColor: 'var(--primary-color)',
      zIndex,
      transform: `translate(${position.x}px, ${position.y}px)`,
    };
  }, [position, style]);

  useMove(ref, {
    onDragStart(e) {},
    onDragEnd(e) {
      //   console.log(e);
    },
    onDrop(e) {
      if (!ref.current) return;
      const w = ref.current.clientWidth,
        h = ref.current.clientHeight;
      console.log('onDrop', e.clientX);
      const x =
        e.clientX < 0 ? 0 : e.clientX > window.innerWidth - w ? window.innerWidth - w : e.clientX;
      const y =
        e.clientY < 0 ? 0 : e.clientY > window.innerHeight - h ? window.innerHeight - h : e.clientY;

      setPosition({ x, y });
    },
  });

  useEffect(() => {
    if (!ref || !ref.current) return;
    const w = ref.current.clientWidth,
      h = ref.current.clientHeight;
    setPosition({ x: window.innerWidth - w - 20, y: window.innerHeight - h - 20 });
  }, []);

  return (
    <div
      ref={ref}
      style={getStyle}
      onClick={onClick}
      className="fixed left-0 top-0 size-40 flex-center rounded-20 shadow-down-1 cursor-pointer select-none will-change-transform"
    >
      <Badge count={1} offset={[0, -10]} size="small">
        <Icon name="chat-2-fill" size={20} color="#fff" />
      </Badge>
    </div>
  );
}

export default (props: IMFloatButton) => createPortal(<IMFloatButton {...props} />, document.body);
