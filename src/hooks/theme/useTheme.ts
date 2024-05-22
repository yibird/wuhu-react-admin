import React, { useEffect } from 'react';
import { useAppStore, useSelector } from '@/store';
import { themes } from '@/common';
import { ThemeEnum } from '@/enums';
import type { ThemeConfig } from 'antd';

export function useTheme() {
  const { app, setTheme } = useAppStore(useSelector(['app', 'setTheme']));
  const { theme, themeColor } = app;

  const setDocumentTheme = (theme: ThemeEnum) => {
    document.documentElement.dataset.theme = theme;
    if (theme === ThemeEnum.DARK) {
      document.documentElement.classList.add(ThemeEnum.DARK);
    } else {
      document.documentElement.classList.remove(ThemeEnum.DARK);
    }
  };

  const changeTheme = (theme: ThemeEnum) => {
    setDocumentTheme(theme);
    setTheme(theme);
  };

  useEffect(() => {
    console.log('themes[theme]:', themes[theme], theme);
    setDocumentTheme(theme);
  }, [theme]);

  const themeConfig: ThemeConfig = React.useMemo(() => {
    return {
      cssVar: true,
      token: {
        colorPrimary: themeColor,
        borderRadius: 2,
        algorithm: themes[theme].algorithm,
        colorBgLayout: '#fff',
      },
      components: themes[theme].components,
    };
  }, [theme, themeColor]);
  return { theme, themeConfig, changeTheme };
}
