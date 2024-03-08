import React, { useMemo } from 'react';
import { useAppStore } from '@/store';
import { shallow } from 'zustand/shallow';

export default function Logo() {
  const { showLogo, collapsed, themeColor } = useAppStore((state) => state.sider, shallow);
  const { name, logo } = useAppStore((state) => {
    return state.app;
  }, shallow);

  const getStyle = useMemo(() => {
    return {
      backgroundColor: themeColor,
      // color: isWhite(themeColor!) ? '#333' : '#fff',
    };
  }, [themeColor]);

  if (!showLogo) return;

  return (
    <div className="flex-center h-50 text-white" style={getStyle}>
      <img src={logo} className="h-32 w-32" />
      {!collapsed && <span className="truncate text-20 ml-10">{name}</span>}
    </div>
  );
}
