import { useEffect, useRef, useState } from 'react';
import { throttle } from 'lodash-es';
import type { ContextMenuProps, ContextMenuItem } from './types';
import './index.css';

import { emitter } from '@/utils/emitter';
import { SHOW_MENU } from './constant';

export default function ContextMenu({
  id,
  items = [],
  animation = '',
  zIndex = 1000,
  preventHideOnScroll = false,
  preventHideOnResize = false,
  onContextMenu,
}: ContextMenuProps) {
  const menuRef = useRef<HTMLUListElement>(null);
  const [state, setState] = useState({
    x: 0,
    y: 0,
    visible: false,
  });

  const handleShow = (options: { id: string; event: PointerEvent }) => {
    if (state.visible || id !== options.id) return;
    setState({ ...state, x: options.event.pageX, y: options.event.pageY, visible: true });
  };
  const handleHide = throttle(() => {
    if (state.visible) {
      setState({ ...state, visible: false });
    }
  }, 30);

  const handleOutsideClick = (e: Event) => {
    const menuEl = menuRef.current;
    if (!menuEl) return;
    if (!menuEl.contains(e.target as Node)) {
      setState({ ...state, visible: false });
    }
  };

  useEffect(() => {
    emitter.on(`${SHOW_MENU}-${id}`, (options: { id: string; event: PointerEvent }) => {
      handleShow(options);
    });
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    if (!preventHideOnScroll) {
      document.addEventListener('scroll', handleHide);
    }
    if (!preventHideOnResize) {
      window.addEventListener('resize', handleHide);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
      if (!preventHideOnScroll) {
        document.removeEventListener('scroll', handleHide);
      }
      if (!preventHideOnResize) {
        window.removeEventListener('resize', handleHide);
      }
    };
  });

  useEffect(() => {
    setStyle();
  }, [state]);

  if (!state.visible) return;

  // --------------- method

  function setStyle() {
    const wrapFn = window.requestAnimationFrame || setTimeout;
    wrapFn(() => {
      const menuEl = menuRef.current;
      if (!menuEl) return;
      const { x, y } = state;
      const { left, top } = computePosition(x, y);
      menuEl.style.left = `${left}px`;
      menuEl.style.top = `${top}px`;
      menuEl.style.zIndex = zIndex.toString();
      menuEl.style.setProperty('--theme-color', '#1677ff');
    });
  }

  function computePosition(x: number = 0, y: number = 0) {
    const menuEl = menuRef.current;
    let positionStyle = { left: x, top: y };
    if (!menuEl) return positionStyle;
    const width = menuEl.clientWidth,
      height = menuEl.clientHeight;

    if (window.innerHeight - positionStyle.top < height) {
      positionStyle.top -= height;
    }
    if (window.innerWidth - positionStyle.left < width) {
      positionStyle.left -= width;
    }
    return positionStyle;
  }

  const handleClick = (item: ContextMenuItem, index: number) => {
    onContextMenu && onContextMenu(item, index);
    handleHide();
  };

  return (
    <ul ref={menuRef} className="context-menu">
      {items.map((item, index) => {
        return (
          <li onClick={() => handleClick(item, index)} key={index}>
            <div>{item.icon}</div>
            <div>{item.title}</div>
            <div>{item.suffix}</div>
          </li>
        );
      })}
    </ul>
  );
}
