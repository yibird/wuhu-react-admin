import React, { useMemo } from 'react';
export interface ViewSiderProps extends BaseProps {
  width?: number;
  span?: number;
}
function ViewSider({ width = 200, children, style, className }: ViewSiderProps) {
  const getWidth = useMemo(() => {
    return typeof width === 'number' ? `${width}px` : width;
  }, [width]);
  const getStyle = useMemo(() => {
    return {
      height: '100%',
      width: getWidth,
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
