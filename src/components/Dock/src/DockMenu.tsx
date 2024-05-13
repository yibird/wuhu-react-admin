import clsx from 'clsx';
import React, { useState } from 'react';
import { Tooltip } from 'antd';
import { throttle } from 'lodash-es';
import { CLASSES } from './constant';
import type { DockProps } from './types';

export default function DockMenu({ items = [], onClick }: Pick<DockProps, 'items' | 'onClick'>) {
  const [current, setCurrent] = useState(-1);

  const handleMouseEnter = throttle((index: number) => {
    if (current === index) return;
    setCurrent(index);
  }, 10);

  const handleMouseLeave = throttle(() => {
    setCurrent(-1);
  }, 10);

  const getClasses = (index: number) => {
    if (current === -1) return CLASSES.dockMenuItem;
    return clsx(CLASSES.dockMenuItem, {
      [CLASSES.dockMenuItemCurrent]: current === index,
      [CLASSES.dockMenuItemPrev]: current - 1 === index,
      [CLASSES.dockMenuItemNext]: current + 1 === index,
      [CLASSES.dockMenuItemPrevSecond]: current - 2 === index,
      [CLASSES.dockMenuItemNextSecond]: current + 2 === index,
    });
  };

  return (
    <ul className="dock-menu">
      {items.map((item, index) => {
        return (
          <li
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => onClick && onClick(item)}
            className={getClasses(index)}
            key={index}
          >
            <div className={CLASSES.dockMenuItemContent}>
              <Tooltip title={item.title}>
                <img src={item.icon} />
              </Tooltip>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
