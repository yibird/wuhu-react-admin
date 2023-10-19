import { MouseEventHandler } from 'react';
import { showMenu } from '../actions';
import type { TriggerProps } from '../types';

export function Trigger({ id, children }: TriggerProps) {
  const handleContextmenu: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.nativeEvent.preventDefault();
    // 触发显示菜单事件
    showMenu({ id, event: e.nativeEvent });
  };
  return (
    <div onContextMenu={handleContextmenu} style={{ cursor: 'pointer' }}>
      {children}
    </div>
  );
}
