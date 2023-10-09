import React from 'react';
import { Icon } from '@/components';

interface TabPrevProps extends BaseProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function TabPrev({ onClick, className, style }: TabPrevProps) {
  return (
    <div onClick={onClick} className={className}>
      <Icon size={24} name="arrow-left-s-line" />
    </div>
  );
}

export default TabPrev;
