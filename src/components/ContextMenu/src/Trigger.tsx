import React from 'react';
import { emitter } from '@/utils/emitter';
import { SHOW_MENU } from './constant';
import type { TriggerProps } from './types';

export default function Trigger({ id, params, children, className, style = {} }: TriggerProps) {
  const handleContextmenu: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.nativeEvent.preventDefault();
    emitter.dispatch(`${SHOW_MENU}-${id}`, {
      event: e.nativeEvent,
      params,
    });
  };

  return (
    <div
      onContextMenu={handleContextmenu}
      style={{ cursor: 'pointer', ...style }}
      className={className}
    >
      {children}
    </div>
  );
}
