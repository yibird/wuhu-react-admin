import React, { useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { AliveScope } from 'react-activation';
import { AppRoute } from '@/router';
import { useAppStore } from '@/store';
import { shallow } from 'zustand/shallow';
import { themes } from '@/common';
import zhCN from 'antd/locale/zh_CN';

function App() {
  const { themeMode, theme } = useAppStore((state) => state.app, shallow);

  const getTheme = useMemo(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', theme);
    return {
      cssVar: true,
      // hashed: false,
      token: {
        colorPrimary: theme,
        borderRadius: 2,
        algorithm: themes[themeMode].algorithm,
      },
      components: {
        Layout: themes[themeMode].Layout,
      },
    };
  }, [themeMode, theme]);

  return (
    <ConfigProvider theme={getTheme} locale={zhCN}>
      <BrowserRouter>
        <AliveScope>
          <AppRoute />
        </AliveScope>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;