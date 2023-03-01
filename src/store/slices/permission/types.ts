import type { IMenuItem } from "@/common/menus";

export interface PermissionState {
  // 客户端菜单列表
  clientMenus: IMenuItem[];
  // 服务端菜单列表
  serverMenus: IMenuItem[];
  // 扁平化菜单项
  flatMenus: IMenuItem[];
}

export interface PermissionAction {
  setPermission: (state: Partial<PermissionState>) => void;
  setServerMenus: () => void;
}

export type PermissionSlice = PermissionState & PermissionAction;
