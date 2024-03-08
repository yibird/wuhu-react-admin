import { useEffect, useState } from 'react';
import { LocaleEnum } from '@/enums';
import defaultMessages from './zh_CN';
import zh_CN from 'antd/es/locale/zh_CN';
import type { MessageFormatElement } from 'react-intl';
import type { ConfigProviderProps } from 'antd';
import { getModuleDefault } from '@/utils/module';
import { localeItems } from '@/common';
import { useAppStore } from '@/store';
import { shallow } from 'zustand/shallow';

type Locale = ConfigProviderProps['locale'];
type LocalMessages = Record<string, string> | Record<string, MessageFormatElement[]>;
interface LocaleConfig {
  locale: string;
  localeMessages: LocalMessages;
  antdLocale: Locale;
  localeMap: string;
}

export function useLocale() {
  const { locale = LocaleEnum.ZH_CN } = useAppStore((state) => state.app, shallow);
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
