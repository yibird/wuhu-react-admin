import { ProjectConfig } from "#/config";
import { IMenus } from "@/common/menus";

/** App */
export interface AppAction {
  getCollaped: () => boolean;
  setCollapsed: (collapsed: boolean) => void;

  setThemeColor: (theme: string) => void;
  setMenuThemeColor: (theme: string) => void;
  setHeaderThemeColor: (theme: string) => void;
}
export type AppState = ProjectConfig;
export type AppSlice = AppState & AppAction;

/** Tab */
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

/** User */
export interface UserState {
  userInfo: Nullable<object>;
  token?: string;
  roleList: any[];
  lastUpdateTime: number;
}
export interface UserAction {}
export type UserSlice = UserState & UserAction;
/** Permission */

export interface PermissionState {
  // 客户端菜单列表
  clientMenus: IMenus[];
  // 服务端菜单列表
  serverMenus: IMenus[];
}
export interface PermissionAction {
  setServerMenus: () => void;
}
export type PermissionSlice = PermissionState & PermissionAction;

export type RootState = AppSlice & PermissionSlice;
