import clsx from 'clsx';
import React, { useMemo } from 'react';
import { CLASSES } from './constant';

function ViewHeader({ children, style, className }: BaseProps) {
  const classes = clsx(CLASSES.viewHeader, className);
  return (
    <div style={style} className={classes}>
      {children}
    </div>
  );
}

export default ViewHeader;
