import { StateCreator, createStore } from 'zustand/vanilla';
import { persist } from 'zustand/middleware';
import {
  ThemeEnum,
  SiderModeEnum,
  TabThemeEnum,
  AnimationTypeEnum,
  HeaderActionBarEnum,
  LocaleEnum,
} from '@/enums';
import { createBoundedUseStore, createSelectors } from '../util';
import type { AnimationSetting, ProjectConfig } from '#/config';

import logo from '@/assets/svg/logo.svg';

export interface AppState extends ProjectConfig {
  setCollapsed: (collapsed: boolean) => void;
  // 设置系统主题
  setTheme: (theme: ThemeEnum) => void;
  setAnimation: (animation: AnimationSetting) => void;
  setLocale: (locale: LocaleEnum) => void;

  setApp: (app: ProjectConfig['app']) => void;
  setSider: (siderSetting: ProjectConfig['sider']) => void;
  setHeader: (headerSetting: ProjectConfig['header']) => void;
  setTabs: (tabs: ProjectConfig['tabs']) => void;
  setFooter: (footer: ProjectConfig['footer']) => void;
}

const initialState: ProjectConfig = {
  sider: {
    show: true,
    fixed: false,
    showLogo: true,
    collapsed: false,
    collapsedWidth: 60,
    menuTheme: ThemeEnum.DARK,
    themeColor: '#001529',
    mode: SiderModeEnum.FLAT,
  },
  header: {
    themeColor: '#fff',
    fixed: true,
    show: true,
    actionBar: Object.values(HeaderActionBarEnum),
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
    animationType: AnimationTypeEnum.SLIDE_LEFT,
  },
  lock: {
    locked: false,
    password: '',
  },
  app: {
    name: 'Wuhu-Admin',
    logo,
    theme: ThemeEnum.LIGHT,
    themeColor: 'rgb(22, 119, 255)',
    locale: LocaleEnum.ZH_CN,
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
  setAnimation(animation) {
    set({ ...get(), animation });
  },
  setLocale(locale) {
    const { app, setApp } = get();
    setApp({ ...app, locale });
  },
  setTabs(tabs) {
    set({ ...get(), tabs });
  },
  setFooter(footer) {
    set({ ...get(), footer });
  },
});

export const appStore = createStore<AppState>()(persist(storeCreator, { name: 'app' }));
export const useAppStore = createBoundedUseStore(appStore);
export const useAppStoreSelector = createSelectors(appStore);
