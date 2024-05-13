import React from 'react';
import DockMenu from './DockMenu';
import { DockProps } from './types';
import './style/index.less';
import clsx from 'clsx';
import { CLASSES } from './constant';

export default function Dock({ items, position = 'bottom', onClick, style, className }: DockProps) {
  const classes = clsx(
    CLASSES.dock,
    {
      [CLASSES.dockTop]: position === 'top',
      [CLASSES.dockBottom]: position === 'bottom',
      [CLASSES.dockLeft]: position === 'left',
      [CLASSES.dockRight]: position === 'right',
    },
    className,
  );
  return (
    <div className={classes} style={style}>
      <div className={CLASSES.dockContainer}>
        <DockMenu items={items} onClick={onClick} />
      </div>
    </div>
  );
}
