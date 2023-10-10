import { theme } from 'antd';
import { ThemeEnum } from '@/enums';

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
