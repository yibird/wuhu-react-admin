import React, { CSSProperties, useMemo } from 'react';
import type { ViewContentProps } from './types';

function ViewContent({ full = true, children, style, className }: ViewContentProps) {
  const getStyle = useMemo(() => {
    const mergeStyle: CSSProperties = {
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
    };
    if (full) {
      mergeStyle.flex = 1;
    }
    return { ...mergeStyle, ...style };
  }, [full, style]);
  return (
    <div style={getStyle} className={className}>
      {children}
    </div>
  );
}

export default ViewContent;
