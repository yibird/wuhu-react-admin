import React, { useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { AppRoute } from '@/router';
import { useAppStore } from '@/store';
import { shallow } from 'zustand/shallow';
import { themes } from '@/common';

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
    <ConfigProvider theme={getTheme}>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
