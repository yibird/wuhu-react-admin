import React from 'react';
import { Icon } from '@/components/Icon';
import './style/trigger.less';

interface TriggerProps extends BaseProps {
  position: 'top' | 'bottom' | 'left' | 'right';
}

export default function Trigger({ position = 'right' }: TriggerProps) {
  return (
    <div>
      <span className="trigger-bar-icon">
        <Icon name="arrow-left-wide-line" />
      </span>
    </div>
  );
}
