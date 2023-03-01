import { MenuModeEnum } from "@/enums/menu";
import { AppState } from "./types";

export const initialState: AppState = {
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
