import React, { CSSProperties, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import ContextmenuSubmenu from './ContextmenuSubmenu';
import ContextmenuItem from './ContextmenuItem';
import ContextmenuDivider from './ContextmenuDivider';
import { emitter } from '@/utils/emitter';
import { SHOW_MENU, CLASSES } from './constant';
import './styles/index.less';
import type { ContextmenuProps } from './types';
import { Provider } from './context';

function Contextmenu({
  id,
  activeColor = '#fff',
  activeBgColor = 'var(--primary-color)',
  mountTarget = document.body,
  preventHideOnScroll,
  preventHideOnResize,
  onClick,
  children,
}: ContextmenuProps) {
  const contextmenuRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  // ========== methods

  const computePosition = () => {
    const el = contextmenuRef.current;
    if (!el) return;
    const width = el.clientWidth,
      height = el.clientHeight;
    const positionStyle = { ...position };
    if (window.innerHeight - positionStyle.top < height) {
      positionStyle.top -= height;
    }
    if (window.innerWidth - positionStyle.left < width) {
      positionStyle.left -= width;
    }
    return positionStyle;
  };

  const handleShow = (e: PointerEvent) => {
    const left = e.pageX,
      top = e.pageY;
    setPosition({ left, top });
    setVisible(true);
  };
  const handleHide = () => {
    setVisible(false);
  };
  const handleOutsideClick = (e: Event) => {
    const el = contextmenuRef.current;
    if (!el) return;
    if (!el.contains(e.target as Node)) {
      handleHide();
    }
  };

  useEffect(() => {
    emitter.on(`${SHOW_MENU}-${id}`, (e: PointerEvent) => {
      handleShow(e);
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
  }, []);

  const getStyle = useMemo<CSSProperties>(() => {
    return {
      display: visible ? 'block' : 'none',
      '--z-menu-active-color': activeColor,
      '--z-menu-active-bg-color': activeBgColor,
      ...computePosition(),
    };
  }, [visible]);

  const renderMenu = () => {
    return (
      <div ref={contextmenuRef} style={getStyle} className={CLASSES.contextmenu}>
        <ul className={CLASSES.contextmenuInner}>{children}</ul>
      </div>
    );
  };
  return (
    <Provider value={{ handleHide, onClick }}>
      {typeof mountTarget === 'boolean' || !mountTarget
        ? renderMenu()
        : createPortal(renderMenu(), mountTarget)}
    </Provider>
  );
}

Contextmenu.SubMenu = ContextmenuSubmenu;
Contextmenu.Item = ContextmenuItem;
Contextmenu.Divider = ContextmenuDivider;

export default Contextmenu;
