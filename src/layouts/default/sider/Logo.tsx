import React, { useMemo } from 'react';
import { useAppStore } from '@/store';
import { shallow } from 'zustand/shallow';
import { isWhite } from '@/utils/color';

export default function Logo() {
  const { showLogo, collapsed, themeColor } = useAppStore((state) => state.sider, shallow);
  const { name, logo } = useAppStore((state) => {
    return state.app;
  }, shallow);

  if (!showLogo) return;

  const getStyle = useMemo(() => {
    return {
      backgroundColor: themeColor,
      // color: isWhite(themeColor!) ? '#333' : '#fff',
    };
  }, [themeColor]);

  return (
    <div className="flex-center h-50 text-white" style={getStyle}>
      <img src={logo} className="h-32 w-32" />
      {!collapsed && <span className="truncate text-20 ml-10">{name}</span>}
    </div>
  );
}
