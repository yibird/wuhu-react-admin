import React, { useMemo, CSSProperties } from 'react';
import ViewSider from './ViewSider';
import ViewHeader from './ViewHeader';
import ViewContent from './ViewContent';
import { useFlexGapSupport } from '@/hooks/dom/useFlexGapSupport';

export interface ViewProps extends BaseProps {
  // 显示方向,可选值为 "horizontal"(水平) 或 "vertical"(垂直),默认"horizontal"
  direction?: 'horizontal' | 'vertical';
  // 是否全屏
  full?: boolean;
  // 元素之间的间距
  gutter?: number | string;
}
function View({
  direction = 'horizontal',
  full = true,
  gutter = 10,
  children,
  className,
  style,
}: ViewProps) {
  const gapSupport = useFlexGapSupport();

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
      height: '100%',
      width: '100%',
      overflow: 'hidden',
      flexDirection: direction === 'horizontal' ? 'row' : 'column',
    };

    full && Object.assign(mergeStyle, { flex: 1 });
    if (typeof gutter !== undefined && gapSupport) {
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

  const Child = React.memo(() => {
    if (gapSupport || !Array.isArray(children)) return <>{children}</>;
    return (
      <>
        {children.map((c, index) => {
          return mergeChildrenStyle(c, getChildStyle(index === children.length - 1));
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
export default View;
