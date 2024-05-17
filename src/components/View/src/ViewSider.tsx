import React, { useMemo, useRef, useState } from 'react';
import { ScrollBar, Icon } from '@/components';
import Trigger from './Trigger';
import type { ViewSiderProps } from './types';
import clsx from 'clsx';

function ViewSider({ width = 200, shrinkable = true, children, style, className }: ViewSiderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shrink, setShrink] = useState(false);

  const getStyle = useMemo(() => {
    // if (shrink) {
    //   return { width: 0 };
    // }
    return { width };
  }, [shrink]);

  const handleToggleShrink = () => {
    setShrink(!shrink);
  };

  const classes = clsx('view-sider', {
    'view-sider-shrink': shrink,
  });
  return (
    <div ref={ref} style={getStyle} className={classes}>
      <ScrollBar className={className}>{children}</ScrollBar>
      {/* <div className={triggerClasses} onClick={handleToggleShrink}>
        <Icon name="arrow-left-wide-line trigger-bar-icon" />
      </div> */}
      <Trigger shrink={shrink} onClick={handleToggleShrink} />
    </div>
  );
}

export default ViewSider;
