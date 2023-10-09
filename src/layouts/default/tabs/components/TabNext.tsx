import React from 'react';
import { Icon } from '@/components';

interface TabNextProps extends BaseProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
function TabNext({ onClick, className, style }: TabNextProps) {
  return (
    <div onClick={onClick} className={className}>
      <Icon size={24} name="arrow-right-s-line" />
    </div>
  );
}

export default TabNext;
