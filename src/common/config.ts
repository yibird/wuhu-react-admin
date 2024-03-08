import { LocaleEnum, ThemeEnum } from '@/enums';
import { theme, type MenuProps } from 'antd';

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

export const themes = {
  [ThemeEnum.LIGHT]: {
    algorithm: theme.defaultAlgorithm,
    Layout: {
      bodyBg: '#f5f5f5',
      siderBg: '',
    },
  },
  [ThemeEnum.DARK]: {
    algorithm: theme.darkAlgorithm,
    Layout: {
      bodyBg: '',
      siderBg: '',
    },
  },
};
