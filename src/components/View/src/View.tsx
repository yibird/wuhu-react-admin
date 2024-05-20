import React, { useMemo, CSSProperties } from 'react';
import { ViewContext } from './context';
import ViewSider from './ViewSider';
import ViewHeader from './ViewHeader';
import ViewContent from './ViewContent';
import { detectFlexGapSupported } from '@/utils/dom/styleChecker';
import type { ViewProps } from './types';

import './style/index.less';

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

  const mergeChildrenStyle = (children: React.ReactNode, style: CSSProperties) => {
    if (!React.isValidElement(children)) {
      return children;
    }
    return React.cloneElement(children as React.ReactElement, {
      style: { ...style, ...(children.props.style || {}) },
    });
  };

  const Child = React.memo(function Child() {
    if (gapSupport || !Array.isArray(children)) {
      return children;
    }
    return children!.map((c: React.ReactNode, index) => {
      return mergeChildrenStyle(c, getChildStyle(index === children!.length - 1));
    });
  });

  return (
    <ViewContext.Provider value={{ gutter }}>
      <div style={getStyle} className={`view ${className}`}>
        <Child />
      </div>
    </ViewContext.Provider>
  );
}
View.Sider = ViewSider;
View.Header = ViewHeader;
View.Content = ViewContent;
