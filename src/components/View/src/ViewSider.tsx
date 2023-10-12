import React, { useMemo } from 'react';
import type { ViewSiderProps } from './types';

function ViewSider({ width = 200, children, style, className }: ViewSiderProps) {
  const getWidth = useMemo(() => {
    return typeof width === 'number' ? `${width}px` : width;
  }, [width]);
  const getStyle = useMemo(() => {
    return {
      height: '100%',
      width: getWidth,
      minWidth: getWidth,
      backgroundColor: '#fff',
      padding: 10,
      ...style,
    };
  }, [style]);

  return (
    <div style={getStyle} className={className}>
      {children}
    </div>
  );
}

export default ViewSider;
