import React from 'react';
import { ConfigProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import { eq } from 'lodash-es';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from '@/router/AppRoute';
import { useLocale } from '@/locales';
import { useAppStore } from '@/store';

function App() {
  const { themeColor, locale } = useAppStore((state) => state, eq);
  const theme = {
    token: {
      colorPrimary: themeColor,
      borderRadius: 2,
    },
  };

  const { message } = useLocale(locale);

  return (
    <ConfigProvider theme={theme}>
      <IntlProvider messages={message} locale={locale}>
        <BrowserRouter>
          <AppRoute />
        </BrowserRouter>
      </IntlProvider>
    </ConfigProvider>
  );
}

export default App;
