import React, { useMemo, useState, useContext } from 'react';
import type { ContextmenuItem } from './types';
import { CLASSES } from './constant';
import clsx from 'clsx';
import { context } from './context';
import type { Context } from './context';

export default function ContextmenuItem(item: ContextmenuItem) {
  const { icon, title, suffix, disabled, children } = item;
  const [hover, setHover] = useState(false);
  const { handleHide, onClick } = useContext<Context>(context);
  const classes = useMemo(() => {
    return clsx(CLASSES.contextmenuItem, {
      [CLASSES.contextmenuItemHover]: hover,
      [CLASSES.contextmenuItemDisabled]: disabled,
    });
  }, [hover, disabled]);

  const handleMouseEnter: React.MouseEventHandler<HTMLLIElement> = (e) => {
    if (disabled) return;
    setHover(true);
  };
  const handleMouseLeave: React.MouseEventHandler<HTMLLIElement> = (e) => {
    if (disabled) return;
    setHover(false);
  };
  const handleClick = () => {
    onClick && onClick({ ...item, title: title || children });
    handleHide && handleHide();
  };

  return (
    <li
      className={classes}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {icon && <span className={CLASSES.contextmenuItemIcon}>{icon}</span>}
      {title || children}
      {suffix && <span className={CLASSES.contextmenuItemSuffix}>{suffix}</span>}
    </li>
  );
}
