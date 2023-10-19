import { useEffect, useRef, useState } from 'react';
import { EventListener } from './eventListener';
import './index.css';
import { throttle } from 'lodash-es';

import type { ContextMenuProps, ContextMenuItem } from './types';

export function ContextMenu({
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

  const listener = new EventListener();

  const handleShow = (e: PointerEvent) => {
    if (state.visible) return;
    setState({ ...state, x: e.pageX, y: e.pageY, visible: true });
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
    listener.registerEvent(id, handleShow, () => {});
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

    if (innerHeight - positionStyle.top < height) {
      positionStyle.top -= height;
    }
    if (innerWidth - positionStyle.left < width) {
      positionStyle.left -= width;
    }
    return positionStyle;
  }

  const handleClick = (item: ContextMenuItem) => {
    onContextMenu && onContextMenu(item.type);
    handleHide();
  };

  return (
    <ul ref={menuRef} className="context-menu">
      {items.map((item, index) => {
        return (
          <li onClick={handleClick} key={index}>
            <div>{item.icon}</div>
            <div>{item.title}</div>
            <div>{item.suffix}</div>
          </li>
        );
      })}
    </ul>
  );
}
