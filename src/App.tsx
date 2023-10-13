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
  const { themeMode, themeColor } = useAppStore((state) => state.app, shallow);

  const getTheme = useMemo(() => {
    return {
      token: {
        colorPrimary: themeColor,
        borderRadius: 2,
        algorithm: themes[themeMode].algorithm,
      },
      components: {
        Layout: themes[themeMode].Layout,
      },
    };
  }, [themeMode, themeColor]);

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
