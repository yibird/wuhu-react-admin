import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { AliveScope } from 'react-activation';

import { AppRoute, beforeEachGuard, afterEachGuard } from '@/router';
import { Loading } from '@/components';
import { useLocale } from '@/locales';
import { useTheme } from '@/hooks';
import '@/styles';

const queryClient = new QueryClient();

function App() {
  const { themeConfig } = useTheme();
  const { localeMessages, antdLocale, localeMap } = useLocale();
  return (
    <ConfigProvider theme={themeConfig} locale={antdLocale}>
      <IntlProvider messages={localeMessages} locale={localeMap}>
        <BrowserRouter>
          <AliveScope>
            <QueryClientProvider client={queryClient}>
              <Suspense fallback={<Loading loading full />}>
                <AppRoute beforeEach={beforeEachGuard} afterEach={afterEachGuard} />
              </Suspense>
            </QueryClientProvider>
          </AliveScope>
        </BrowserRouter>
      </IntlProvider>
    </ConfigProvider>
  );
}

function bootstrap(el: HTMLElement | null, children: React.ReactNode) {
  if (!el) return;
  ReactDOM.createRoot(el).render(children);
}
bootstrap(document.getElementById('root'), <App />);
