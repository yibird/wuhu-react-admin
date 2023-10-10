import React, { useMemo } from 'react';
import { useAppStore } from '@/store';
import { isWhite } from '@/utils/color';
import { shallow } from 'zustand/shallow';

export interface LogoProps {
  themeColor?: string;
  collapsed?: boolean;
}

function Logo({ themeColor, collapsed }: LogoProps) {
  console.log('Logo:');

  const { name, showLogo, logo } = useAppStore((state) => {
    return state.app;
  }, shallow);

  const getStyle = useMemo(() => {
    return {
      backgroundColor: themeColor,
      color: isWhite(themeColor!) ? '#333' : '#fff',
    };
  }, [themeColor]);

  if (!showLogo) return;

  return (
    <div className="flex-center h-50" style={getStyle}>
      <img src={logo} className="h-32 w-32" />
      {!collapsed && <span className="truncate text-20 ml-10">{name}</span>}
    </div>
  );
}

export default Logo;
