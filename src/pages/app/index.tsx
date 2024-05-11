import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { AliveScope } from 'react-activation';
import { AppRoute } from '@/router';
import { IntlProvider } from 'react-intl';
import { useLocale } from '@/locales';
import { useTheme } from './useTheme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Loading } from '@/components';
const queryClient = new QueryClient();

export default function App() {
  const theme = useTheme();
  const { localeMessages, antdLocale, localeMap } = useLocale();
  return (
    <ConfigProvider theme={theme} locale={antdLocale}>
      <IntlProvider messages={localeMessages} locale={localeMap}>
        <BrowserRouter>
          <AliveScope>
            <QueryClientProvider client={queryClient}>
              <Suspense fallback={<Loading loading full />}>
                <AppRoute />
              </Suspense>
            </QueryClientProvider>
          </AliveScope>
        </BrowserRouter>
      </IntlProvider>
    </ConfigProvider>
  );
}
