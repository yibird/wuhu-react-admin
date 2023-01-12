import { StateCreator } from "zustand";
import { MenuModeEnum } from "@/enums/menu";
import { AppState, AppSlice, RootState } from "../types";

type SetState = (
  partial:
    | RootState
    | Partial<RootState>
    | ((state: RootState) => RootState | Partial<RootState>),
  replace?: boolean | undefined
) => void;

const initialState: AppState = {
  menuSetting: {
    showSider: true,
    themeColor: "rgb(0,21,41)",
    fixed: false,
    show: true,
    collapsed: false,
    collapsedWidth: 60,
    menuWidth: 80,
    mode: MenuModeEnum.INLINE,
  },
  headerSetting: {
    themeColor: "#fff",
    fixed: true,
    show: true,
    showSearch: true,
    showNotice: true,
    showTranslate: true,
    showFullScreen: true,
    showLockPage: true,
    showSettig: true,
    showBreadcrumb: true,
    showBreadCrumbIcon: true,
  },
  showLogo: true,
  showFooter: false,

  themeColor: "#1677ff",
};

export const createAppSlice: StateCreator<AppSlice, [], [], AppSlice> = (
  set,
  get
) => ({
  ...initialState,
  getCollaped: () => get().menuSetting.collapsed,
  setCollapsed(collapsed: boolean) {
    set((state) => ({ menuSetting: { ...state.menuSetting, collapsed } }));
  },
  setThemeColor(theme: string) {
    set(() => ({ themeColor: theme }));
  },
  setMenuThemeColor(themeColor: string) {
    set((state) => {
      return { menuSetting: { ...state.menuSetting, themeColor } };
    });
  },
  setHeaderThemeColor(themeColor: string) {
    set((state) => {
      return { headerSetting: { ...state.headerSetting, themeColor } };
    });
  },
});
