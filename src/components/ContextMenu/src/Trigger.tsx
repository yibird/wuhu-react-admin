import React from 'react';
import { emitter } from '@/utils/emitter';
import { SHOW_MENU } from './constant';
import type { TriggerProps } from './types';

export default function Trigger({ id, children }: TriggerProps) {
  const handleContextmenu: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.nativeEvent.preventDefault();
    emitter.dispatch(`${SHOW_MENU}-${id}`, e.nativeEvent);
  };

  return (
    <div onContextMenu={handleContextmenu} style={{ cursor: 'pointer' }}>
      {children}
    </div>
  );
}
