import React, { useMemo } from 'react';
import { useAppStore } from '@/store';
import { shallow } from 'zustand/shallow';
import { themes } from '@/common';

export function useTheme() {
  const { theme, themeMode } = useAppStore((state) => state.app, shallow);
  return useMemo(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', theme);
    return {
      cssVar: true,
      token: {
        colorPrimary: '#1677ff',
        borderRadius: 2,
        algorithm: themes[themeMode].algorithm,
      },
      components: {
        Layout: themes[themeMode].Layout,
      },
    };
  }, [theme, themeMode]);
}
