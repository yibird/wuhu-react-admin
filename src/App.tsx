import React from 'react';
import { ConfigProvider } from 'antd';
import { useAppStore } from '@/store';
import { IntlProvider } from 'react-intl';
import { eq } from 'lodash-es';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from '@/router/AppRoute';
import { useLocale } from '@/locales';

function App() {
  const { themeColor, locale } = useAppStore((state) => state, eq);
  const theme = {
    token: {
      colorPrimary: themeColor,
      borderRadius: 2,
    },
  };

  const { message } = useLocale(locale);

  console.log(message);

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
