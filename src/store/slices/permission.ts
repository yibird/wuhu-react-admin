import { StateCreator } from "zustand";
import { IMenuItem, menus } from "@/common/menus";
import { toList } from "@/utils/tree";
import type { RootState } from "./index";

export interface PermissionState {
  // 客户端菜单列表
  clientMenus: IMenuItem[];
  // 服务端菜单列表
  serverMenus: IMenuItem[];
  // 扁平化菜单项
  flatMenus: IMenuItem[];
}
export interface PermissionAction {
  setServerMenus: () => void;
}
export type PermissionSlice = PermissionState & PermissionAction;

const initialState: PermissionState = {
  clientMenus: [],
  serverMenus: [],
  flatMenus: [],
};

export const createPermissionSlice: StateCreator<
  RootState,
  [],
  [],
  PermissionSlice
> = (set, get) => ({
  ...initialState,
  async setServerMenus() {
    setTimeout(() => {
      set(() => ({ serverMenus: menus, flatMenus: toList(menus) }));
    }, 10);
  },
});
