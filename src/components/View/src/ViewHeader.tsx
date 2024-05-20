import clsx from 'clsx';
import React, { useContext, useMemo, useState } from 'react';
import { ViewContext } from './context';
import Trigger from './Trigger';
import { CLASSES } from './constant';

function ViewHeader({ children, style, className }: BaseProps) {
  const [shrink, setShrink] = useState(true);
  const { gutter } = useContext(ViewContext);

  const classes = clsx(
    CLASSES.viewHeader,
    {
      'view-header-shrink': shrink,
    },
    className,
  );

  const getStyle = useMemo(() => {
    return { marginTop: shrink ? -parseFloat(gutter.toString()) : 0, ...style };
  }, [shrink]);

  const handleToggleShrink = () => {
    setShrink(!shrink);
  };

  return (
    <div style={getStyle} className={classes}>
      <div className="view-header-wrapper" style={{ top: shrink ? gutter : 0 }}>
        <div className="view-header-wrapper__content">{children}</div>
        <Trigger position="bottom" shrink={shrink} onClick={handleToggleShrink} />
      </div>
    </div>
  );
}

export default ViewHeader;
