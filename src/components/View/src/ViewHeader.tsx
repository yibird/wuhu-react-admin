import clsx from 'clsx';
import React, { useMemo } from 'react';
import Trigger from './Trigger';
import { CLASSES } from './constant';

function ViewHeader({ children, style, className }: BaseProps) {
  const classes = clsx(CLASSES.viewHeader, className);
  return (
    <div
      style={{
        backgroundColor: '#fff',
        ...style,
      }}
      className={classes}
    >
      {children}
      <Trigger position="bottom" />
    </div>
  );
}

export default ViewHeader;
