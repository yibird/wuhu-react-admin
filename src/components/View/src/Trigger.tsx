import React from 'react';
import { Icon } from '@/components/Icon';
import './style/trigger.less';
import clsx from 'clsx';

interface TriggerProps extends BaseProps {
  position?: 'top' | 'bottom' | 'left' | 'right';
  shrink?: boolean;
  onClick?: () => void;
}

export default function Trigger({ position = 'right', shrink = false, onClick }: TriggerProps) {
  const classes = clsx('trigger', `trigger-${position}`, { 'trigger-shrink': shrink });
  return (
    <div onClick={onClick} className={classes}>
      <div className={`trigger-bar trigger-bar-${position}`}>
        <Icon name="arrow-left-wide-line" />
      </div>
    </div>
  );
}
