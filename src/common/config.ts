import { LocaleEnum, ThemeEnum } from '@/enums';
import { type ThemeConfig, theme } from 'antd';

export const localeItems = [
  {
    key: LocaleEnum.ZH_CN,
    label: '简体中文',
    localeMap: 'zh',
  },
  {
    key: LocaleEnum.EN_US,
    label: 'English',
    localeMap: 'en',
  },
];

export const themes: Record<ThemeEnum, ThemeConfig> = {
  [ThemeEnum.LIGHT]: {
    algorithm: theme.defaultAlgorithm,
    components: {
      Layout: {
        headerBg: '#fff',
        headerColor: '#333',
        bodyBg: '#f5f5f5',
      },
    },
  },
  [ThemeEnum.DARK]: {
    algorithm: theme.defaultAlgorithm,
    components: {
      Layout: {
        headerColor: '#fff',
      },
    },
  },
};
