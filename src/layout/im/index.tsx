import { Icon } from '@/components';
import React, { useMemo, useState } from 'react';
import IMDialog from './IMDialog';
import type { IMProps } from './types';

import { Badge } from 'antd';

export default function IM({ open = false, zIndex = 1000, movable = true, style }: IMProps) {
  const [innerOpen, setInnerOpen] = useState(open);
  const getStyle = useMemo(() => {
    return {
      backgroundColor: 'var(--primary-color)',
      zIndex,
      transform: 'translate(-20px, -20px)',
    };
  }, [style]);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setInnerOpen(!innerOpen);
  };

  return (
    <>
      <div
        style={getStyle}
        onClick={handleClick}
        className="fixed bottom-0 right-0 size-40 flex-center rounded-20 shadow-down-1 cursor-pointer select-none"
      >
        <Badge count={1} offset={[0, -10]} size="small">
          <Icon name="chat-2-fill" size={20} color="#fff" />
        </Badge>
      </div>
      <IMDialog zIndex={zIndex + 10} open={innerOpen} />
    </>
  );
}
