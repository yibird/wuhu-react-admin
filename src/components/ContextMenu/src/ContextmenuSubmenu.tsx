import React, { useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { CLASSES } from './constant';
import { ContextmenuItemProps } from './types';

export default function ContextmenuSubmenu({
  title,
  icon,
  suffix,
  disabled = false,
  children,
}: Omit<ContextmenuItemProps, 'type'>) {
  const [hover, setHover] = useState(false);
  const [placements, setPlacements] = useState(['top', 'right']);
  const submenuRef = useRef<HTMLDivElement>(null);

  const classes = useMemo(() => {
    return clsx(CLASSES.contextmenuSubmenu, CLASSES.contextmenuItem, {
      [CLASSES.contextmenuItemHover]: hover,
      [CLASSES.contextmenuItemDisabled]: disabled,
    });
  }, [hover, disabled]);

  const menusClasses = useMemo(() => {
    return clsx(
      CLASSES.contextmenu,
      CLASSES.contextmenuSubmenuMenus,
      CLASSES.contextmenuSubmenuItem,
      {
        [CLASSES.contextmenuSubmenuMenusLeft]: placements.includes('left'),
        [CLASSES.contextmenuSubmenuMenusRight]: placements.includes('right'),
        [CLASSES.contextmenuSubmenuMenusTop]: placements.includes('top'),
        [CLASSES.contextmenuSubmenuMenusBottom]: placements.includes('bottom'),
      },
    );
  }, [placements]);

  const handleMouseEnter: React.MouseEventHandler<HTMLLIElement> = (e) => {
    if (disabled) return;
    setHover(true);
    const el = submenuRef.current;
    if (!el) return;
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const width = el.clientWidth,
      height = el.clientHeight;
    const x = rect.right + width >= window.innerWidth ? 'left' : 'right';
    const y = rect.bottom + height >= window.innerHeight ? 'bottom' : 'top';
    setPlacements([...placements, x, y]);
  };
  const handleMouseLeave: React.MouseEventHandler<HTMLLIElement> = () => {
    if (disabled) return;
    setHover(false);
  };

  const renderSubmenu = () => {
    if (!hover) return;
    return (
      <div ref={submenuRef} className={menusClasses}>
        <ul>{children}</ul>
      </div>
    );
  };

  return (
    <li className={classes} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div>
        {icon && <span className={CLASSES.contextmenuItemIcon}>{icon}</span>}
        {title}
        {suffix && <span className={CLASSES.contextmenuItemSuffix}>{suffix}</span>}
      </div>
      {renderSubmenu()}
    </li>
  );
}
