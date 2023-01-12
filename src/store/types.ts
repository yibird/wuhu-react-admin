import { ProjectConfig } from "#/config";

/** app */
export interface AppAction {
  getCollaped: () => boolean;
  setCollapsed: (collapsed: boolean) => void;

  setThemeColor: (theme: string) => void;
  setMenuThemeColor: (theme: string) => void;
  setHeaderThemeColor: (theme: string) => void;
}
export type AppState = ProjectConfig;
export type AppSlice = AppState & AppAction;

/** tab */
interface TabItem {
  id: number;
  title: string;
}

export interface TabState {
  tabList: TabItem[];
  currentTab: TabItem;
}
export interface TabAction {}
export type TabSlice = TabState & TabAction;

export type RootState = AppSlice;
// export type RootState = {
//   app: AppSlice;
//   tab: TabSlice;
// };
