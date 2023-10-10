import { StateCreator, createStore } from 'zustand/vanilla';
import type { ProjectConfig } from '#/config';
import { persist } from 'zustand/middleware';
import { MenuModeEnum } from '@/enums/menu';
import { ThemeEnum } from '@/enums';
import { createBoundedUseStore, createSelectors } from '../utils';

export interface AppState extends ProjectConfig {
  getCollapsed: () => boolean;
  setMenuSetting: (menuSetting: ProjectConfig['menuSetting']) => void;
  setHeaderSetting: (headerSetting: ProjectConfig['headerSetting']) => void;
  setCollapsed: (collapsed: boolean) => void;
  setTheme: (themeColor: string) => void;
  setMenuTheme: (theme: string) => void;
  setHeaderTheme: (theme: string) => void;
  setAnimation: (animation: ProjectConfig['animation']) => void;
  setLocale: (locale: string) => void;
}

const initialState: ProjectConfig = {
  menuSetting: {
    showSide: true,
    themeColor: 'rgb(0,21,41)',
    fixed: false,
    show: true,
    collapsed: false,
    collapsedWidth: 60,
    menuWidth: 80,
    mode: MenuModeEnum.INLINE,
  },
  headerSetting: {
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
  animation: {
    topProgressBar: true,
    enableAnimation: true,
    animationType: 'fade',
  },
  app: {
    name: 'Wuhu-Admin',
    logo: 'https://api-frameworks.vercel.sh/framework-logos/next-dark.svg',
    themeMode: ThemeEnum.LIGHT,
    themeColor: '#1677ff',
    locale: 'zh_CN',
    showLogo: true,
    showFooter: false,
  },
};

const storeCreator: StateCreator<AppState> = (set, get) => ({
  ...initialState,
  getCollapsed() {
    return get().menuSetting.collapsed;
  },
  setMenuSetting(menuSetting) {
    set({ ...get(), menuSetting });
  },
  setHeaderSetting(headerSetting) {
    set({ ...get(), headerSetting });
  },
  setCollapsed(collapsed) {
    const { setMenuSetting, menuSetting } = get();
    setMenuSetting({ ...menuSetting, collapsed });
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
