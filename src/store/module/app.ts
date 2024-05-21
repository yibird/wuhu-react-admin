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
  // 设置Sider配置
  setSider: (siderSetting: ProjectConfig['sider']) => void;
  // 设置Header配置
  setHeader: (headerSetting: ProjectConfig['header']) => void;
  // 设置App配置
  setApp: (app: ProjectConfig['app']) => void;
  setCollapsed: (collapsed: boolean) => void;
  // 设置系统主题
  setTheme: (theme: ThemeEnum) => void;
  // 设置侧边栏主题
  setSiderTheme: (theme: string) => void;
  // 设置侧边栏模式
  setSiderMode: (mode: SiderModeEnum) => void;
  // 设置头部主题
  setHeaderTheme: (theme: string) => void;
  setAnimation: (animation: AnimationSetting) => void;
  setLocale: (locale: LocaleEnum) => void;
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
    theme: '#fff',
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
    themeColor: '#1677ff',
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
  setSiderTheme(theme) {},
  setSiderMode(mode) {
    const { sider, setSider } = get();
    setSider({ ...sider, mode });
  },
  setHeaderTheme(theme) {
    const { header, setHeader } = get();
    setHeader({ ...header, theme });
  },
  setAnimation(animation) {
    set({ ...get(), animation });
  },
  setLocale(locale) {
    const { app, setApp } = get();
    setApp({ ...app, locale });
  },
});

export const appStore = createStore<AppState>()(persist(storeCreator, { name: 'app' }));
export const useAppStore = createBoundedUseStore(appStore);
export const useAppStoreSelector = createSelectors(appStore);
