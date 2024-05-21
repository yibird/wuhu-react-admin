import React from 'react';
import { useAppStore } from '@/store';
import { shallow } from 'zustand/shallow';

export default function Logo() {
  const { showLogo, collapsed, themeColor } = useAppStore((state) => state.sider, shallow);
  const { name, logo } = useAppStore((state) => state.app, shallow);

  if (!showLogo) return;

  return (
    <div className="flex-center h-50 text-white" style={{ backgroundColor: themeColor }}>
      <div className="size-40">
        <img src={logo} />
      </div>
      {!collapsed && <span className="truncate text-base font-bold ml-10">{name}</span>}
    </div>
  );
}
