import { StateCreator, createStore } from 'zustand/vanilla';
import { persist } from 'zustand/middleware';
import { ThemeEnum, MenuModeEnum, TabThemeEnum, AnimationTypeEnum } from '@/enums';
import { createBoundedUseStore, createSelectors } from '../utils';

import type { ProjectConfig } from '#/config';

export interface AppState extends ProjectConfig {
  setSider: (siderSetting: ProjectConfig['sider']) => void;
  setHeader: (headerSetting: ProjectConfig['header']) => void;
  setApp: (app: ProjectConfig['app']) => void;
  setCollapsed: (collapsed: boolean) => void;
  // 设置系统主题
  setTheme: (theme: string) => void;
  // 设置侧边栏主题
  setSiderTheme: (theme: string) => void;
  // 设置头部主题
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
    theme: ThemeEnum.DARK,
    themeColor: '#001529',
    menuMode: MenuModeEnum.INLINE,
  },
  header: {
    theme: '#fff',
    fixed: true,
    show: true,
    actionBar: ['search', 'translate', 'fullScreen', 'lockPage', 'setting'],
    showBreadcrumb: true,
    showBreadCrumbIcon: true,
  },
  tabs: {
    show: true,
    theme: TabThemeEnum.BLOCK,
  },
  footer: {
    show: false,
  },
  animation: {
    topProgressBar: true,
    enableAnimation: true,
    animationType: AnimationTypeEnum.SILDE_RIGHT,
  },
  lock: {
    locked: false,
    password: '',
  },
  app: {
    name: 'Wuhu-Admin',
    logo: 'https://api-frameworks.vercel.sh/framework-logos/next-dark.svg',
    themeMode: ThemeEnum.LIGHT,
    theme: '#1677ff',
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
  setApp(app) {
    set({ ...get(), app });
  },
  setCollapsed(collapsed) {
    const { sider, setSider } = get();
    setSider({ ...sider, collapsed });
  },
  setTheme(theme) {
    const { app, setApp } = get();
    setApp({ ...app, theme });
  },
  setSiderTheme(theme) {},
  setHeaderTheme(theme) {
    const { header, setHeader } = get();
    setHeader({ ...header, theme });
  },
  setAnimation(animation) {},
  setLocale(locale) {},
});

const appStore = createStore<AppState>()(persist(storeCreator, { name: 'app' }));
export const useAppStore = createBoundedUseStore(appStore);
export const useAppStoreSelector = createSelectors(appStore);
