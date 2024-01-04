import React, { useMemo, useState } from 'react';
import type { ContextmenuItemProps } from './types';
import { CLASSES } from './constant';
import clsx from 'clsx';

export default function ContextmenuItem({
  icon,
  title,
  suffix,
  disabled,
  children,
}: ContextmenuItemProps) {
  const [hover, setHover] = useState(false);
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

  return (
    <li className={classes} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {icon && <span className={CLASSES.contextmenuItemIcon}>{icon}</span>}
      {title || children}
      {suffix && <span className={CLASSES.contextmenuItemSuffix}>{suffix}</span>}
    </li>
  );
}
