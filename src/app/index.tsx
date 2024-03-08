import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { AliveScope } from 'react-activation';
import { AppRoute } from '@/router';
import { IntlProvider } from 'react-intl';
import { useLocale } from '@/locales';
import { useTheme } from './useTheme';

export default function App() {
  const theme = useTheme();
  const { localeMessages, antdLocale, localeMap } = useLocale();
  console.log('123123123', antdLocale);

  return (
    <ConfigProvider theme={theme} locale={antdLocale}>
      <IntlProvider messages={localeMessages} locale={localeMap}>
        <BrowserRouter>
          <AliveScope>
            <AppRoute />
          </AliveScope>
        </BrowserRouter>
      </IntlProvider>
    </ConfigProvider>
  );
}
