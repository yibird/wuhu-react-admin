import React, { useMemo } from 'react';
import { Icon, Trigger } from '@/components';
import clsx from 'clsx';
export interface TabItemProps {
  active?: boolean;
  index: number;
  title?: string;
  home?: boolean;
  closeCls?: string;
  onChange?: () => void;
  onClose?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

function TabItem({
  active,
  index,
  title,
  home = false,
  closeCls,
  onChange,
  onClose,
  className,
}: TabItemProps) {
  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onClose && onClose();
  };

  // const getCls = useMemo(() => {
  //   return clsx(active && "tab-active", className);
  // }, [active, className]);

  const handleChange = () => {
    onChange && onChange();
  };
  return (
    <li className={className} onClick={handleChange}>
      <Trigger id="tabContextmenu" params={{ index }}>
        {home ? (
          <Icon name="home-2-line" size={18} />
        ) : (
          <>
            {title && <div>{title}</div>}
            <Icon onClick={handleClose} className={closeCls} name="close-line" />
          </>
        )}
      </Trigger>
    </li>
  );
}

export default TabItem;
