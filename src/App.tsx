import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { AppRoute } from '@/router';
import { useAppStore } from '@/store';

function App() {
  const themeColor = useAppStore((state) => state.themeColor);
  const theme = {
    token: {
      colorPrimary: themeColor,
      borderRadius: 2,
    },
  };

  return (
    <ConfigProvider theme={theme}>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
