import React, { useMemo, CSSProperties } from 'react';
import ViewSider from './ViewSider';
import ViewHeader from './ViewHeader';
import ViewContent from './ViewContent';
import { detectFlexGapSupported } from '@/utils/dom/styleChecker';
import type { ViewProps } from './types';

export function View({
  direction = 'vertical',
  full = true,
  gutter = 10,
  children,
  className,
  style,
}: ViewProps) {
  const gapSupport = detectFlexGapSupported();

  const getChildStyle = (isLast: boolean) => {
    const style: CSSProperties = {};
    if (typeof gutter === 'undefined') return style;
    if (direction === 'horizontal' && !isLast) {
      style.marginRight = gutter;
    }
    if (direction === 'vertical' && !isLast) {
      style.marginBottom = gutter;
    }
    return style;
  };

  const getStyle = useMemo(() => {
    const mergeStyle: CSSProperties = {
      display: 'flex',
      // padding: '15px 12px',
      height: '100%',
      width: '100%',
      overflow: 'hidden',
      flexDirection: direction === 'horizontal' ? 'row' : 'column',
    };

    full && Object.assign(mergeStyle, { flex: 1 });
    if (typeof gutter !== 'undefined' && gapSupport) {
      mergeStyle.gap = gutter;
    }
    return { ...mergeStyle, ...style };
  }, [style, gapSupport, direction]);

  if (children === null || children === undefined) {
    return null;
  }

  const mergeChildrenStyle = (children: any, style: CSSProperties) => {
    return { ...children, props: { style, ...(children.props || {}) } };
  };

  const Child = React.memo(function Child() {
    if (gapSupport || !Array.isArray(children)) return <>{children}</>;
    return (
      <>
        {children!.map((c, index) => {
          return mergeChildrenStyle(c, getChildStyle(index === children!.length - 1));
        })}
      </>
    );
  });

  return (
    <div style={getStyle} className={className}>
      <Child />
    </div>
  );
}
View.Sider = ViewSider;
View.Header = ViewHeader;
View.Content = ViewContent;
