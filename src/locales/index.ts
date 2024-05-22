import { useEffect, useState } from 'react';
import zh_CN from 'antd/es/locale/zh_CN';
import defaultMessages from './zh_CN';
import { getModuleDefault } from '@/utils/module';
import { localeItems } from '@/common';
import { useAppStore, useSelector } from '@/store';
import { LocaleEnum } from '@/enums';
import type { MessageFormatElement } from 'react-intl';
import type { ConfigProviderProps } from 'antd';

type Locale = ConfigProviderProps['locale'];
type LocalMessages = Record<string, string> | Record<string, MessageFormatElement[]>;
interface LocaleConfig {
  locale: string;
  localeMessages: LocalMessages;
  antdLocale: Locale;
  localeMap: string;
}

export function useLocale() {
  console.log('useLocale');
  const { app } = useAppStore(useSelector(['app']));
  const locale = app.locale || LocaleEnum.ZH_CN;
  const [localeConfig, setLocaleConfig] = useState<LocaleConfig>({
    locale,
    localeMessages: defaultMessages,
    antdLocale: zh_CN,
    localeMap: 'zh',
  });

  const loadLocaleData = async (locale: LocaleEnum) => {
    try {
      const localePath = `/src/locales/${locale}/index.ts`;
      const localeMessages = await getModuleDefault<LocalMessages>(localePath);
      const antLocalePath = `../../node_modules/antd/es/locale/${locale}.js`;
      const antdLocale = await getModuleDefault<Locale>(antLocalePath);
      const localeMap =
        localeItems.find((item) => item.key === locale)?.localeMap || localeConfig.localeMap;
      setLocaleConfig({ locale, localeMessages, antdLocale, localeMap });
    } catch (e) {
      console.log('err', e);
    }
  };
  useEffect(() => {
    loadLocaleData(locale);
  }, [locale]);
  return localeConfig;
}
