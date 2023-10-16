import { StateCreator, createStore } from 'zustand/vanilla';
import { persist } from 'zustand/middleware';
import { ThemeEnum, MenuModeEnum } from '@/enums';
import { createBoundedUseStore, createSelectors } from '../utils';

import type { ProjectConfig } from '#/config';

export interface AppState extends ProjectConfig {
  setSider: (siderSetting: ProjectConfig['sider']) => void;
  setHeader: (headerSetting: ProjectConfig['header']) => void;
  setCollapsed: (collapsed: boolean) => void;
  setTheme: (themeColor: string) => void;
  setMenuTheme: (theme: string) => void;
  setHeaderTheme: (theme: string) => void;
  setAnimation: (animation: ProjectConfig['animation']) => void;
  setLocale: (locale: string) => void;
}

const initialState: ProjectConfig = {
  sider: {
    show: true,
    fixed: false,
    showLogo: true,
    collapsed: false,
    collapsedWidth: 60,
    theme: ThemeEnum.LIGHT,
    themeColor: '#fff',
    menuMode: MenuModeEnum.INLINE,
  },
  header: {
    themeColor: '#fff',
    fixed: true,
    show: true,
    showSearch: true,
    showNotice: true,
    showTranslate: true,
    showFullScreen: true,
    showLockPage: true,
    showSetting: true,
    showBreadcrumb: true,
    showBreadCrumbIcon: true,
  },
  tabs: {
    show: true,
    theme: 'block',
  },
  footer: {
    show: false,
  },
  animation: {
    topProgressBar: true,
    enableAnimation: true,
    animationType: 'slide-right',
  },
  lock: {
    locked: false,
    password: '',
  },
  app: {
    name: 'Wuhu-Admin',
    logo: 'https://api-frameworks.vercel.sh/framework-logos/next-dark.svg',
    themeMode: ThemeEnum.LIGHT,
    themeColor: '#1677ff',
    locale: 'zh_CN',
    showLogo: true,
    showFooter: false,
    pageCache: true,
  },
};

const storeCreator: StateCreator<AppState> = (set, get) => ({
  ...initialState,
  setSider(sider) {
    set({ ...get(), sider });
  },
  setHeader(header) {
    set({ ...get(), header });
  },
  setCollapsed(collapsed) {
    const { sider, setSider } = get();
    setSider({ ...sider, collapsed });
  },
  setTheme(themeColor) {},
  setMenuTheme(theme) {},
  setHeaderTheme(theme) {},
  setAnimation(animation) {},
  setLocale(locale) {},
});

const appStore = createStore<AppState>()(persist(storeCreator, { name: 'app' }));
export const useAppStore = createBoundedUseStore(appStore);
export const useAppStoreSelector = createSelectors(appStore);
