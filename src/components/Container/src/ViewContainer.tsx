import React, { CSSProperties, PropsWithChildren } from 'react';

export interface ViewContainerProps {
  gutter?: number | string | Array<string | number>;
  padding?: number | string;
  className?: string;
  style?: CSSProperties;
}

export function ViewContainer({
  padding = 10,
  gutter = 10,
  children,
  className,
  style,
}: PropsWithChildren<ViewContainerProps>) {
  const getStyle = () => {
    const style: CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
    };
    if (typeof gutter === 'undefined') return style;
    const [rowGap, columnGap] = Array.isArray(gutter) ? gutter : [gutter, gutter];
    style.rowGap = rowGap;
    style.columnGap = columnGap;
    return style;
  };
  return (
    <div
      className={className}
      style={{
        padding,
        overflowY: 'auto',
        height: '100%',
        ...getStyle(),
        ...style,
      }}
    >
      {children}
    </div>
  );
}
