import React from 'react';
import { useAppStore } from '@/store';
import { shallow } from 'zustand/shallow';
import { themes } from '@/common';
import { ThemeEnum } from '@/enums';
import type { ThemeConfig } from 'antd';

export function useTheme() {
  const { app, setTheme } = useAppStore((state) => state, shallow);
  const { theme, themeColor } = app;
  const changeTheme = (theme: ThemeEnum) => {
    const themeName = theme === ThemeEnum.DARK ? 'dark' : 'light';
    document.documentElement.dataset.theme = themeName;
    document.documentElement.classList.toggle(ThemeEnum.DARK);
    setTheme(theme);
  };
  const themeConfig: ThemeConfig = React.useMemo(() => {
    return {
      cssVar: true,
      token: {
        colorPrimary: themeColor,
        borderRadius: 2,
        algorithm: themes[theme].algorithm,
      },
      components: {
        Layout: themes[theme].Layout,
      },
    };
  }, [theme, themeColor]);
  return { theme, themeConfig, changeTheme };
}
