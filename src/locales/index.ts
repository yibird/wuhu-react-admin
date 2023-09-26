import { useMemo, useState } from 'react';
import defaultMessage from './zh-CN';
interface Locale {
  locale: string;
  message: Record<string, any>;
}

export function useLocale(locale: string) {
  const [localeConfig, setLocaleConfig] = useState<Locale>({
    locale,
    message: defaultMessage,
  });

  const loadLocale = async (locale: string) => {
    try {
      const locales = import.meta.glob('@/locales/*.ts');
      const module = (await locales[`/src/locales/${locale}.ts`]()) as any;
      setLocaleConfig({ locale, message: module.default });
    } catch (e) {
      console.log('err', `/src/locales/${locale}.ts`);
    }
  };

  useMemo(() => {
    loadLocale(locale);
  }, [locale]);

  return {
    ...localeConfig,
    setLocale: () => loadLocale(locale),
  };
}
